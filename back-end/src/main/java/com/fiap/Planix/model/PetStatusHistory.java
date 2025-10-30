package com.fiap.Planix.model;

import jakarta.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Table(name = "PET_STATUS_HISTORY")
public class PetStatusHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pet_hist_seq")
    @SequenceGenerator(name = "pet_hist_seq", sequenceName = "PET_STATUS_HISTORY_ID_PET_STAT_SEQ", allocationSize = 1)
    @Column(name = "id_pet_status_history")
    private Long idPetStatusHistory;

    @Column(name = "status", length = 100, nullable = false)
    private String status;

    @Column(name = "description", length = 300)
    private String description;

    @Column(name = "timestamp", nullable = false)
    private OffsetDateTime timestamp;

    @Column(name = "created_at", nullable = false, updatable = false)
    private OffsetDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private OffsetDateTime updatedAt;

    // Relacionamentos

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PET_id_pet", nullable = false)
    private Pet pet;

    public Long getIdPetStatusHistory() {
        return idPetStatusHistory;
    }

    public void setIdPetStatusHistory(Long idPetStatusHistory) {
        this.idPetStatusHistory = idPetStatusHistory;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public OffsetDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
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

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }
}