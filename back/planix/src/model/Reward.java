package model;

import java.sql.Timestamp;

public class Reward {
    private long rewardId;
    private String rewardUid;
    private String title;
    private String description;
    private long pointsRequired;
    private boolean isActive;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private boolean isObsolete;

    // Construtor completo
    public Reward(long rewardId, String rewardUid, String title, String description, long pointsRequired,
                  boolean isActive, Timestamp createdAt, Timestamp updatedAt, boolean isObsolete) {
        this.rewardId = rewardId;
        this.rewardUid = rewardUid;
        this.title = title;
        this.description = description;
        this.pointsRequired = pointsRequired;
        this.isActive = isActive;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isObsolete = isObsolete;
    }

    // Construtor sem ID (para inserts automáticos)
    public Reward(String rewardUid, String title, String description, long pointsRequired,
                  boolean isActive, Timestamp createdAt, Timestamp updatedAt, boolean isObsolete) {
        this(0, rewardUid, title, description, pointsRequired, isActive, createdAt, updatedAt, isObsolete);
    }

    // Getters e Setters
    public long getRewardId() { return rewardId; }
    public void setRewardId(long rewardId) { this.rewardId = rewardId; }

    public String getRewardUid() { return rewardUid; }
    public void setRewardUid(String rewardUid) { this.rewardUid = rewardUid; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public long getPointsRequired() { return pointsRequired; }
    public void setPointsRequired(long pointsRequired) { this.pointsRequired = pointsRequired; }

    public boolean isActive() { return isActive; }
    public void setActive(boolean active) { isActive = active; }

    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }

    public Timestamp getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Timestamp updatedAt) { this.updatedAt = updatedAt; }

    public boolean isObsolete() { return isObsolete; }
    public void setObsolete(boolean obsolete) { isObsolete = obsolete; }

    @Override
    public String toString() {
        return "Reward{" +
                "rewardId=" + rewardId +
                ", rewardUid='" + rewardUid + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", pointsRequired=" + pointsRequired +
                ", isActive=" + isActive +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                ", isObsolete=" + isObsolete +
                '}';
    }
}
