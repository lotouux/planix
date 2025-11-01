package com.fiap.Planix.model;

import jakarta.persistence.*;
import java.time.OffsetDateTime;
import java.util.Set;

@Entity
@Table(name = "PET")
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pet_seq")
    @SequenceGenerator(name = "pet_seq", sequenceName = "PET_ID_PET_SEQ", allocationSize = 1)
    @Column(name = "id_pet")
    private Long idPet;

    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @Column(name = "species", length = 100)
    private String species;

    @Column(name = "status", length = 50)
    private String status;

    @Column(name = "experience_points")
    private Integer experiencePoints;

    @Column(name = "level")
    private Integer level;

    @Column(name = "created_at", nullable = false, updatable = false)
    private OffsetDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private OffsetDateTime updatedAt;

    // Relacionamentos

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_id_user", nullable = false)
    private User user;

    @OneToMany(mappedBy = "pet", fetch = FetchType.LAZY)
    private Set<PetStatusHistory> statusHistory;

    public Long getIdPet() {
        return idPet;
    }

    public void setIdPet(Long idPet) {
        this.idPet = idPet;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getExperiencePoints() {
        return experiencePoints;
    }

    public void setExperiencePoints(Integer experiencePoints) {
        this.experiencePoints = experiencePoints;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<PetStatusHistory> getStatusHistory() {
        return statusHistory;
    }

    public void setStatusHistory(Set<PetStatusHistory> statusHistory) {
        this.statusHistory = statusHistory;
    }
}