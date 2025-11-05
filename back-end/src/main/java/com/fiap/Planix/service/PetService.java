package com.fiap.Planix.service;

import com.fiap.Planix.model.Pet;
import com.fiap.Planix.model.User;
import com.fiap.Planix.repository.GoalRepository;
import com.fiap.Planix.repository.PetRepository;
import com.fiap.Planix.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class PetService {

    @Autowired
    private PetRepository petRepository;

    @Autowired
    private GoalRepository goalRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    private int calculateHealthIndex(User user) {
        long totalGoals = goalRepository.countByUser(user);
        if (totalGoals == 0) return 100;

        long completedGoals = goalRepository.findByUser(user)
                .stream()
                .filter(g -> "ALCANÇADA".equalsIgnoreCase(g.getStatus()))
                .count();

        double goalScore = (double) completedGoals / totalGoals * 0.6;

        BigDecimal totalBalance = BigDecimal.valueOf(10000);
        BigDecimal riskThreshold = BigDecimal.valueOf(0);

        double balanceScore = 0.0;
        if (totalBalance.compareTo(riskThreshold) > 0) {
            balanceScore = 0.4;
        } else if (totalBalance.compareTo(riskThreshold) == 0) {
            balanceScore = 0.2;
        }

        int finalPercentage = (int) Math.round((goalScore + balanceScore) * 100);

        return Math.min(finalPercentage, 100);
    }

    public Optional<Pet> findPetByUser(User user) {
        return petRepository.findByUser(user);
    }

    public Pet savePet(Pet pet, User user) {
        if (petRepository.findByUser(user).isPresent() && pet.getIdPet() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "O usuário já possui um Pet.");
        }

        pet.setUser(user);
        pet.setUpdatedAt(java.time.OffsetDateTime.now());

        return petRepository.save(pet);
    }

    public Map<String, Object> getPetStatus(User user) {
        int health = calculateHealthIndex(user);
        String statusText;
        String message;

        if (health >= 80) {
            statusText = "Excelente";
            message = "Parabéns! Suas finanças estão <span>excelentes</span>. O Fino-Bot está no auge do desempenho!";
        } else if (health >= 50) {
            statusText = "Saudável";
            message = "Bom trabalho! Suas finanças estão <span>saudáveis</span>. O Fino-Bot opera com eficiência.";
        } else if (health >= 20) {
            statusText = "Atenção";
            message = "Atenção! Suas finanças precisam de um <span>olhar mais atento</span>. O Fino-Bot pisca o alerta.";
        } else {
            statusText = "Em risco";
            message = "Emergência! Suas finanças estão em <span>risco</span>. O Fino-Bot está com baixo desempenho!";
        }

        Map<String, Object> statusMap = new HashMap<>();
        statusMap.put("healthPercentage", health);
        statusMap.put("statusText", statusText);
        statusMap.put("message", message);

        return statusMap;
    }

    public Pet updatePet(Long id, Pet petDetails, User user) {
        Pet existingPet = petRepository.findByUser(user)
                .filter(p -> p.getIdPet().equals(id))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Pet não encontrado ou acesso negado."));

        existingPet.setName(petDetails.getName());
        return savePet(existingPet, user);
    }

    public void deletePet(Long id, User user) {
        Pet pet = petRepository.findByUser(user)
                .filter(p -> p.getIdPet().equals(id))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Pet não encontrado ou acesso negado."));

        petRepository.delete(pet);
    }
}