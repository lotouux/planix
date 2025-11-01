package com.fiap.Planix.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.OffsetDateTime;

@Entity
@Table(name = "GOAL_CONTRIBUTION")
public class GoalContribution {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "goal_contrib_seq")
    @SequenceGenerator(name = "goal_contrib_seq", sequenceName = "GOAL_CONTRIBUTION_ID_GOAL_CONT_SEQ", allocationSize = 1)
    @Column(name = "id_goal_contribution")
    private Long idGoalContribution;

    @Column(name = "amount", precision = 19, scale = 2, nullable = false)
    private BigDecimal amount;

    @Column(name = "contribution_date", nullable = false)
    private OffsetDateTime contributionDate;

    @Column(name = "created_at", nullable = false, updatable = false)
    private OffsetDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private OffsetDateTime updatedAt;

    // Relacionamentos

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "GOAL_id_goal", nullable = false)
    private Goal goal;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TRANSACTION_id_transaction")
    private Transaction transaction;

    public Long getIdGoalContribution() {
        return idGoalContribution;
    }

    public void setIdGoalContribution(Long idGoalContribution) {
        this.idGoalContribution = idGoalContribution;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public OffsetDateTime getContributionDate() {
        return contributionDate;
    }

    public void setContributionDate(OffsetDateTime contributionDate) {
        this.contributionDate = contributionDate;
    }

    public OffsetDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public OffsetDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Goal getGoal() {
        return goal;
    }

    public void setGoal(Goal goal) {
        this.goal = goal;
    }

    public Transaction getTransaction() {
        return transaction;
    }

    public void setTransaction(Transaction transaction) {
        this.transaction = transaction;
    }
}