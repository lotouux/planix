package com.fiap.Planix.service;

import com.fiap.Planix.model.Goal;
import com.fiap.Planix.model.GoalContribution;
import com.fiap.Planix.model.User;
import com.fiap.Planix.repository.GoalContributionRepository;
import com.fiap.Planix.repository.GoalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.List;

@Service
public class GoalService {

    @Autowired
    private GoalRepository goalRepository;

    @Autowired
    private GoalContributionRepository contributionRepository;

    public List<Goal> findUserGoals(User user) {
        return goalRepository.findByUser(user);
    }

    public Goal findGoalByIdAndUser(Long idGoal, User user) {
        return goalRepository.findByIdGoalAndUser(idGoal, user)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Meta não encontrada ou acesso negado."));
    }

    @Transactional
    public Goal saveGoal(Goal goal, User user) {
        goal.setUser(user);

        if (goal.getCurrentAmount() == null) {
            goal.setCurrentAmount(BigDecimal.ZERO);
        }

        OffsetDateTime now = OffsetDateTime.now();
        if (goal.getIdGoal() == null) {
            goal.setCreatedAt(now);
        }
        goal.setUpdatedAt(now);

        return goalRepository.save(goal);
    }

    @Transactional
    public Goal updateGoal(Long idGoal, Goal goalDetails, User user) {
        Goal existingGoal = findGoalByIdAndUser(idGoal, user);

        existingGoal.setName(goalDetails.getName());
        existingGoal.setTargetAmount(goalDetails.getTargetAmount());
        existingGoal.setTargetDate(goalDetails.getTargetDate());
        existingGoal.setStatus(goalDetails.getStatus());

        existingGoal.setUpdatedAt(OffsetDateTime.now());

        return goalRepository.save(existingGoal);
    }

    @Transactional
    public void deleteGoal(Long idGoal, User user) {
        Goal goalToDelete = findGoalByIdAndUser(idGoal, user);

        contributionRepository.deleteAll(contributionRepository.findByGoal(goalToDelete));

        goalRepository.delete(goalToDelete);
    }

    @Transactional
    public GoalContribution addContribution(Long goalId, BigDecimal amount, User contributingUser) {
        Goal goal = findGoalByIdAndUser(goalId, contributingUser);

        GoalContribution contribution = new GoalContribution();
        contribution.setGoal(goal);
        contribution.setAmount(amount);
        contribution.setContributionDate(OffsetDateTime.now());
        contribution.setCreatedAt(OffsetDateTime.now());
        contribution.setUpdatedAt(OffsetDateTime.now());

        GoalContribution savedContribution = contributionRepository.save(contribution);

        BigDecimal newCurrentAmount = goal.getCurrentAmount().add(amount);
        goal.setCurrentAmount(newCurrentAmount);

        if (newCurrentAmount.compareTo(goal.getTargetAmount()) >= 0) {
            goal.setStatus("ALCANÇADA");
        }

        goal.setUpdatedAt(OffsetDateTime.now());
        goalRepository.save(goal);

        return savedContribution;
    }

    public List<GoalContribution> findContributionsByGoalId(Long goalId) {
        return contributionRepository.findByGoal_IdGoal(goalId);
    }
}