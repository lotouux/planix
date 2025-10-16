package model;

import java.sql.Date;
import java.sql.Timestamp;

public class Goal {
    private long goalId;
    private String goalUid;
    private long userUserId;
    private String name;
    private double targetAmount;
    private double currentAmount;
    private Date startDate;
    private Date endDate;
    private String status;
    private int priority;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private boolean isObsolete;

    // Construtor completo
    public Goal(long goalId, String goalUid, long userUserId, String name, double targetAmount, double currentAmount,
                Date startDate, Date endDate, String status, int priority, Timestamp createdAt, Timestamp updatedAt,
                boolean isObsolete) {
        this.goalId = goalId;
        this.goalUid = goalUid;
        this.userUserId = userUserId;
        this.name = name;
        this.targetAmount = targetAmount;
        this.currentAmount = currentAmount;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.priority = priority;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isObsolete = isObsolete;
    }

    // Construtor sem ID (para insert)
    public Goal(String goalUid, long userUserId, String name, double targetAmount, double currentAmount,
                Date startDate, Date endDate, String status, int priority, Timestamp createdAt, Timestamp updatedAt,
                boolean isObsolete) {
        this(0, goalUid, userUserId, name, targetAmount, currentAmount, startDate, endDate, status, priority, createdAt, updatedAt, isObsolete);
    }

    // Getters e Setters
    public long getGoalId() { return goalId; }
    public void setGoalId(long goalId) { this.goalId = goalId; }

    public String getGoalUid() { return goalUid; }
    public void setGoalUid(String goalUid) { this.goalUid = goalUid; }

    public long getUserUserId() { return userUserId; }
    public void setUserUserId(long userUserId) { this.userUserId = userUserId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public double getTargetAmount() { return targetAmount; }
    public void setTargetAmount(double targetAmount) { this.targetAmount = targetAmount; }

    public double getCurrentAmount() { return currentAmount; }
    public void setCurrentAmount(double currentAmount) { this.currentAmount = currentAmount; }

    public Date getStartDate() { return startDate; }
    public void setStartDate(Date startDate) { this.startDate = startDate; }

    public Date getEndDate() { return endDate; }
    public void setEndDate(Date endDate) { this.endDate = endDate; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public int getPriority() { return priority; }
    public void setPriority(int priority) { this.priority = priority; }

    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }

    public Timestamp getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Timestamp updatedAt) { this.updatedAt = updatedAt; }

    public boolean isObsolete() { return isObsolete; }
    public void setObsolete(boolean obsolete) { isObsolete = obsolete; }

    @Override
    public String toString() {
        return "Goal{" +
                "goalId=" + goalId +
                ", goalUid='" + goalUid + '\'' +
                ", userUserId=" + userUserId +
                ", name='" + name + '\'' +
                ", targetAmount=" + targetAmount +
                ", currentAmount=" + currentAmount +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", status='" + status + '\'' +
                ", priority=" + priority +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                ", isObsolete=" + isObsolete +
                '}';
    }
}
