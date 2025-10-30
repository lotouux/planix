package com.fiap.Planix.repository;

import com.fiap.Planix.model.Goal;
import com.fiap.Planix.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GoalRepository extends JpaRepository<Goal, Long> {

    List<Goal> findByUser(User user);
}