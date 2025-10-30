package com.fiap.Planix.model;

import jakarta.persistence.*;
import java.time.OffsetDateTime;
import java.util.Set;

@Entity
@Table(name = "REWARD")
public class Reward {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reward_seq")
    @SequenceGenerator(name = "reward_seq", sequenceName = "REWARD_ID_REWARD_SEQ", allocationSize = 1)
    @Column(name = "id_reward")
    private Long idReward;

    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @Column(name = "description", length = 300)
    private String description;

    @Column(name = "points_required")
    private Integer pointsRequired;

    @Column(name = "created_at", nullable = false, updatable = false)
    private OffsetDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private OffsetDateTime updatedAt;

    // Relacionamentos

    @ManyToMany(mappedBy = "rewards", fetch = FetchType.LAZY)
    private Set<User> users;

    public Long getIdReward() {
        return idReward;
    }

    public void setIdReward(Long idReward) {
        this.idReward = idReward;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getPointsRequired() {
        return pointsRequired;
    }

    public void setPointsRequired(Integer pointsRequired) {
        this.pointsRequired = pointsRequired;
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

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }
}