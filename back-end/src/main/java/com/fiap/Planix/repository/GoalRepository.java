package com.fiap.Planix.repository;

import com.fiap.Planix.model.Goal;
import com.fiap.Planix.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GoalRepository extends JpaRepository<Goal, Long> {

    List<Goal> findByUser(User user);
    Optional<Goal> findByIdGoalAndUser(Long idGoal, User user);
    long countByUser(User user);
}