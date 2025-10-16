package model;

import java.sql.Timestamp;

public class PetStatusHistory {
    private long historyId;
    private String historyUid;
    private long petPetId;
    private String previousMood;
    private String newMood;
    private String changeReason;
    private Timestamp evaluatedAt;
    private Timestamp createdAt;
    private boolean isObsolete;

    // Construtor completo
    public PetStatusHistory(long historyId, String historyUid, long petPetId, String previousMood,
                            String newMood, String changeReason, Timestamp evaluatedAt,
                            Timestamp createdAt, boolean isObsolete) {
        this.historyId = historyId;
        this.historyUid = historyUid;
        this.petPetId = petPetId;
        this.previousMood = previousMood;
        this.newMood = newMood;
        this.changeReason = changeReason;
        this.evaluatedAt = evaluatedAt;
        this.createdAt = createdAt;
        this.isObsolete = isObsolete;
    }

    // Construtor sem ID (para inserts)
    public PetStatusHistory(String historyUid, long petPetId, String previousMood,
                            String newMood, String changeReason, Timestamp evaluatedAt,
                            Timestamp createdAt, boolean isObsolete) {
        this(0, historyUid, petPetId, previousMood, newMood, changeReason, evaluatedAt, createdAt, isObsolete);
    }

    // Getters e Setters
    public long getHistoryId() { return historyId; }
    public void setHistoryId(long historyId) { this.historyId = historyId; }

    public String getHistoryUid() { return historyUid; }
    public void setHistoryUid(String historyUid) { this.historyUid = historyUid; }

    public long getPetPetId() { return petPetId; }
    public void setPetPetId(long petPetId) { this.petPetId = petPetId; }

    public String getPreviousMood() { return previousMood; }
    public void setPreviousMood(String previousMood) { this.previousMood = previousMood; }

    public String getNewMood() { return newMood; }
    public void setNewMood(String newMood) { this.newMood = newMood; }

    public String getChangeReason() { return changeReason; }
    public void setChangeReason(String changeReason) { this.changeReason = changeReason; }

    public Timestamp getEvaluatedAt() { return evaluatedAt; }
    public void setEvaluatedAt(Timestamp evaluatedAt) { this.evaluatedAt = evaluatedAt; }

    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }

    public boolean isObsolete() { return isObsolete; }
    public void setObsolete(boolean obsolete) { isObsolete = obsolete; }

    @Override
    public String toString() {
        return "PetStatusHistory{" +
                "historyId=" + historyId +
                ", historyUid='" + historyUid + '\'' +
                ", petPetId=" + petPetId +
                ", previousMood='" + previousMood + '\'' +
                ", newMood='" + newMood + '\'' +
                ", changeReason='" + changeReason + '\'' +
                ", evaluatedAt=" + evaluatedAt +
                ", createdAt=" + createdAt +
                ", isObsolete=" + isObsolete +
                '}';
    }
}
