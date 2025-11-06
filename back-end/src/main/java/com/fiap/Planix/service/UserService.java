package com.fiap.Planix.service;

import com.fiap.Planix.model.User;
import com.fiap.Planix.model.Pet;
import com.fiap.Planix.model.Goal;
import com.fiap.Planix.model.BankConnection;
import com.fiap.Planix.model.Notification;
import com.fiap.Planix.repository.UserRepository;
import com.fiap.Planix.repository.PetRepository;
import com.fiap.Planix.repository.GoalRepository;
import com.fiap.Planix.repository.BankConnectionRepository;
import com.fiap.Planix.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PetRepository petRepository;

    @Autowired
    private GoalRepository goalRepository;

    @Autowired
    private BankConnectionRepository bankConnectionRepository;

    @Autowired
    private NotificationRepository notificationRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Transactional
    public User save(User user) {
        return userRepository.save(user);
    }

    @Transactional
    public User update(Long id, User userDetails) {
        return userRepository.findById(id).map(user -> {
            user.setName(userDetails.getName());
            user.setEmail(userDetails.getEmail());
            user.setPhone(userDetails.getPhone());
            user.setBirthDate(userDetails.getBirthDate());
            user.setPreferences(userDetails.getPreferences());
            return userRepository.save(user);
        }).orElseThrow(() -> new RuntimeException("Usuário não encontrado com id " + id));
    }

    @Transactional
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }

    public Set<Pet> getUserPets(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        return user.getPets();
    }

    public Set<Goal> getUserGoals(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        return user.getGoals();
    }

    public Set<BankConnection> getUserBankConnections(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        return user.getBankConnections();
    }

    public List<Notification> getUserNotifications(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        return notificationRepository.findByUserOrderByTimestampDesc(user);
    }
}
