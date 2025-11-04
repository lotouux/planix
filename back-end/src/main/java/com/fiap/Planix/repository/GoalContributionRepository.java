package com.fiap.Planix.repository;

import com.fiap.Planix.model.Goal;
import com.fiap.Planix.model.GoalContribution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GoalContributionRepository extends JpaRepository<GoalContribution, Long> {

    List<GoalContribution> findByGoal(Goal goal);
    List<GoalContribution> findByGoal_IdGoal(Long idGoal);
}