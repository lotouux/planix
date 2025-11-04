package com.fiap.Planix.controller;

import com.fiap.Planix.model.Goal;
import com.fiap.Planix.model.GoalContribution;
import com.fiap.Planix.model.User;
import com.fiap.Planix.service.GoalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/goals")
public class GoalController {

    @Autowired
    private GoalService goalService;

    private User getCurrentUser() {
        User mockUser = new User();
        mockUser.setIdUser(1L);
        return mockUser;
    }

    @GetMapping
    public List<Goal> listGoals() {
        User user = getCurrentUser();
        return goalService.findUserGoals(user);
    }

    @GetMapping("/{id}")
    public Goal getGoalById(@PathVariable Long id) {
        User user = getCurrentUser();
        return goalService.findGoalByIdAndUser(id, user);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Goal createGoal(@RequestBody Goal goal) {
        User user = getCurrentUser();
        return goalService.saveGoal(goal, user);
    }

    @PutMapping("/{id}")
    public Goal updateGoal(@PathVariable Long id, @RequestBody Goal goalDetails) {
        User user = getCurrentUser();
        return goalService.updateGoal(id, goalDetails, user);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteGoal(@PathVariable Long id) {
        User user = getCurrentUser();
        goalService.deleteGoal(id, user);
    }

    @PostMapping("/{goalId}/contribute")
    @ResponseStatus(HttpStatus.CREATED)
    public GoalContribution contributeToGoal(
            @PathVariable Long goalId,
            @RequestParam BigDecimal amount) {

        if (amount == null || amount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "O valor da contribuição deve ser positivo.");
        }

        User user = getCurrentUser();
        return goalService.addContribution(goalId, amount, user);
    }

    @GetMapping("/{goalId}/contributions")
    public List<GoalContribution> listContributions(@PathVariable Long goalId) {
        return goalService.findContributionsByGoalId(goalId);
    }
}