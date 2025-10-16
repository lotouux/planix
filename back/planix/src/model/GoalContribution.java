package model;

import java.sql.Date;
import java.sql.Timestamp;

public class GoalContribution {
    private long contributionId;
    private String contributionUid;
    private long goalGoalId;
    private long transactionTransactionId;
    private double amount;
    private Date contributionDate;
    private String note;
    private Timestamp createdAt;
    private boolean isObsolete;

    // Construtor completo
    public GoalContribution(long contributionId, String contributionUid, long goalGoalId, long transactionTransactionId,
                            double amount, Date contributionDate, String note, Timestamp createdAt, boolean isObsolete) {
        this.contributionId = contributionId;
        this.contributionUid = contributionUid;
        this.goalGoalId = goalGoalId;
        this.transactionTransactionId = transactionTransactionId;
        this.amount = amount;
        this.contributionDate = contributionDate;
        this.note = note;
        this.createdAt = createdAt;
        this.isObsolete = isObsolete;
    }

    // Construtor sem ID (para insert)
    public GoalContribution(String contributionUid, long goalGoalId, long transactionTransactionId,
                            double amount, Date contributionDate, String note, Timestamp createdAt, boolean isObsolete) {
        this(0, contributionUid, goalGoalId, transactionTransactionId, amount, contributionDate, note, createdAt, isObsolete);
    }

    // Getters e Setters
    public long getContributionId() { return contributionId; }
    public void setContributionId(long contributionId) { this.contributionId = contributionId; }

    public String getContributionUid() { return contributionUid; }
    public void setContributionUid(String contributionUid) { this.contributionUid = contributionUid; }

    public long getGoalGoalId() { return goalGoalId; }
    public void setGoalGoalId(long goalGoalId) { this.goalGoalId = goalGoalId; }

    public long getTransactionTransactionId() { return transactionTransactionId; }
    public void setTransactionTransactionId(long transactionTransactionId) { this.transactionTransactionId = transactionTransactionId; }

    public double getAmount() { return amount; }
    public void setAmount(double amount) { this.amount = amount; }

    public Date getContributionDate() { return contributionDate; }
    public void setContributionDate(Date contributionDate) { this.contributionDate = contributionDate; }

    public String getNote() { return note; }
    public void setNote(String note) { this.note = note; }

    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }

    public boolean isObsolete() { return isObsolete; }
    public void setObsolete(boolean obsolete) { isObsolete = obsolete; }

    @Override
    public String toString() {
        return "GoalContribution{" +
                "contributionId=" + contributionId +
                ", contributionUid='" + contributionUid + '\'' +
                ", goalGoalId=" + goalGoalId +
                ", transactionTransactionId=" + transactionTransactionId +
                ", amount=" + amount +
                ", contributionDate=" + contributionDate +
                ", note='" + note + '\'' +
                ", createdAt=" + createdAt +
                ", isObsolete=" + isObsolete +
                '}';
    }
}
