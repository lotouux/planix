package model;

import java.sql.Timestamp;

public class Pet {
    private long petId;
    private String petUid;
    private long userUserId;
    private String name;
    private String species;
    private int petLevel;
    private double happinessScore;
    private String mood;
    private Timestamp lastEvaluatedAt;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private boolean isObsolete;

    // Construtor completo
    public Pet(long petId, String petUid, long userUserId, String name, String species,
               int petLevel, double happinessScore, String mood, Timestamp lastEvaluatedAt,
               Timestamp createdAt, Timestamp updatedAt, boolean isObsolete) {
        this.petId = petId;
        this.petUid = petUid;
        this.userUserId = userUserId;
        this.name = name;
        this.species = species;
        this.petLevel = petLevel;
        this.happinessScore = happinessScore;
        this.mood = mood;
        this.lastEvaluatedAt = lastEvaluatedAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isObsolete = isObsolete;
    }

    // Construtor sem ID (para inserts)
    public Pet(String petUid, long userUserId, String name, String species,
               int petLevel, double happinessScore, String mood, Timestamp lastEvaluatedAt,
               Timestamp createdAt, Timestamp updatedAt, boolean isObsolete) {
        this(0, petUid, userUserId, name, species, petLevel, happinessScore, mood,
                lastEvaluatedAt, createdAt, updatedAt, isObsolete);
    }

    // Getters e Setters
    public long getPetId() { return petId; }
    public void setPetId(long petId) { this.petId = petId; }

    public String getPetUid() { return petUid; }
    public void setPetUid(String petUid) { this.petUid = petUid; }

    public long getUserUserId() { return userUserId; }
    public void setUserUserId(long userUserId) { this.userUserId = userUserId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getSpecies() { return species; }
    public void setSpecies(String species) { this.species = species; }

    public int getPetLevel() { return petLevel; }
    public void setPetLevel(int petLevel) { this.petLevel = petLevel; }

    public double getHappinessScore() { return happinessScore; }
    public void setHappinessScore(double happinessScore) { this.happinessScore = happinessScore; }

    public String getMood() { return mood; }
    public void setMood(String mood) { this.mood = mood; }

    public Timestamp getLastEvaluatedAt() { return lastEvaluatedAt; }
    public void setLastEvaluatedAt(Timestamp lastEvaluatedAt) { this.lastEvaluatedAt = lastEvaluatedAt; }

    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }

    public Timestamp getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Timestamp updatedAt) { this.updatedAt = updatedAt; }

    public boolean isObsolete() { return isObsolete; }
    public void setObsolete(boolean obsolete) { isObsolete = obsolete; }

    @Override
    public String toString() {
        return "Pet{" +
                "petId=" + petId +
                ", petUid='" + petUid + '\'' +
                ", userUserId=" + userUserId +
                ", name='" + name + '\'' +
                ", species='" + species + '\'' +
                ", petLevel=" + petLevel +
                ", happinessScore=" + happinessScore +
                ", mood='" + mood + '\'' +
                ", lastEvaluatedAt=" + lastEvaluatedAt +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                ", isObsolete=" + isObsolete +
                '}';
    }
}
