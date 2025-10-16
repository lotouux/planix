package model;

import java.sql.Timestamp;

public class Category {
    private long categoryId;
    private String categoryUid;
    private long userUserId;
    private long transactionTransactionId;
    private String name;
    private Double suggestedBudgetPercent;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private boolean isObsolete;

    // Construtor completo
    public Category(long categoryId, String categoryUid, long userUserId, long transactionTransactionId,
                    String name, Double suggestedBudgetPercent, Timestamp createdAt, Timestamp updatedAt,
                    boolean isObsolete) {
        this.categoryId = categoryId;
        this.categoryUid = categoryUid;
        this.userUserId = userUserId;
        this.transactionTransactionId = transactionTransactionId;
        this.name = name;
        this.suggestedBudgetPercent = suggestedBudgetPercent;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isObsolete = isObsolete;
    }

    // Construtor sem ID (para insert)
    public Category(String categoryUid, long userUserId, long transactionTransactionId,
                    String name, Double suggestedBudgetPercent, Timestamp createdAt, Timestamp updatedAt,
                    boolean isObsolete) {
        this(0, categoryUid, userUserId, transactionTransactionId, name, suggestedBudgetPercent, createdAt, updatedAt, isObsolete);
    }

    // Getters e Setters
    public long getCategoryId() { return categoryId; }
    public void setCategoryId(long categoryId) { this.categoryId = categoryId; }

    public String getCategoryUid() { return categoryUid; }
    public void setCategoryUid(String categoryUid) { this.categoryUid = categoryUid; }

    public long getUserUserId() { return userUserId; }
    public void setUserUserId(long userUserId) { this.userUserId = userUserId; }

    public long getTransactionTransactionId() { return transactionTransactionId; }
    public void setTransactionTransactionId(long transactionTransactionId) { this.transactionTransactionId = transactionTransactionId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Double getSuggestedBudgetPercent() { return suggestedBudgetPercent; }
    public void setSuggestedBudgetPercent(Double suggestedBudgetPercent) { this.suggestedBudgetPercent = suggestedBudgetPercent; }

    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }

    public Timestamp getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Timestamp updatedAt) { this.updatedAt = updatedAt; }

    public boolean isObsolete() { return isObsolete; }
    public void setObsolete(boolean obsolete) { isObsolete = obsolete; }

    @Override
    public String toString() {
        return "Category{" +
                "categoryId=" + categoryId +
                ", categoryUid='" + categoryUid + '\'' +
                ", userUserId=" + userUserId +
                ", transactionTransactionId=" + transactionTransactionId +
                ", name='" + name + '\'' +
                ", suggestedBudgetPercent=" + suggestedBudgetPercent +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                ", isObsolete=" + isObsolete +
                '}';
    }
}
