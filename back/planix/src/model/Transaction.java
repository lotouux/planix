package model;

import java.sql.Timestamp;
import java.sql.Date;

public class Transaction {
    private long transactionId;
    private String transactionUid;
    private long userUserId;
    private long bankAccountBankAccountId;
    private double amount;
    private String currency;
    private Date transactionDate;
    private Date postedDate;
    private String description;
    private Long categoryId; // pode ser nulo
    private String transactionType;
    private boolean imported;
    private boolean reconciled;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private boolean isObsolete;
    private long goalGoalId;

    // Construtor completo
    public Transaction(long transactionId, String transactionUid, long userUserId, long bankAccountBankAccountId,
                       double amount, String currency, Date transactionDate, Date postedDate, String description,
                       Long categoryId, String transactionType, boolean imported, boolean reconciled,
                       Timestamp createdAt, Timestamp updatedAt, boolean isObsolete, long goalGoalId) {
        this.transactionId = transactionId;
        this.transactionUid = transactionUid;
        this.userUserId = userUserId;
        this.bankAccountBankAccountId = bankAccountBankAccountId;
        this.amount = amount;
        this.currency = currency;
        this.transactionDate = transactionDate;
        this.postedDate = postedDate;
        this.description = description;
        this.categoryId = categoryId;
        this.transactionType = transactionType;
        this.imported = imported;
        this.reconciled = reconciled;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isObsolete = isObsolete;
        this.goalGoalId = goalGoalId;
    }

    // Construtor sem ID (para inserts automáticos)
    public Transaction(String transactionUid, long userUserId, long bankAccountBankAccountId,
                       double amount, String currency, Date transactionDate, Date postedDate, String description,
                       Long categoryId, String transactionType, boolean imported, boolean reconciled,
                       Timestamp createdAt, Timestamp updatedAt, boolean isObsolete, long goalGoalId) {
        this(0, transactionUid, userUserId, bankAccountBankAccountId, amount, currency, transactionDate, postedDate,
                description, categoryId, transactionType, imported, reconciled, createdAt, updatedAt, isObsolete, goalGoalId);
    }

    // Getters e Setters
    public long getTransactionId() { return transactionId; }
    public void setTransactionId(long transactionId) { this.transactionId = transactionId; }

    public String getTransactionUid() { return transactionUid; }
    public void setTransactionUid(String transactionUid) { this.transactionUid = transactionUid; }

    public long getUserUserId() { return userUserId; }
    public void setUserUserId(long userUserId) { this.userUserId = userUserId; }

    public long getBankAccountBankAccountId() { return bankAccountBankAccountId; }
    public void setBankAccountBankAccountId(long bankAccountBankAccountId) { this.bankAccountBankAccountId = bankAccountBankAccountId; }

    public double getAmount() { return amount; }
    public void setAmount(double amount) { this.amount = amount; }

    public String getCurrency() { return currency; }
    public void setCurrency(String currency) { this.currency = currency; }

    public Date getTransactionDate() { return transactionDate; }
    public void setTransactionDate(Date transactionDate) { this.transactionDate = transactionDate; }

    public Date getPostedDate() { return postedDate; }
    public void setPostedDate(Date postedDate) { this.postedDate = postedDate; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Long getCategoryId() { return categoryId; }
    public void setCategoryId(Long categoryId) { this.categoryId = categoryId; }

    public String getTransactionType() { return transactionType; }
    public void setTransactionType(String transactionType) { this.transactionType = transactionType; }

    public boolean isImported() { return imported; }
    public void setImported(boolean imported) { this.imported = imported; }

    public boolean isReconciled() { return reconciled; }
    public void setReconciled(boolean reconciled) { this.reconciled = reconciled; }

    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }

    public Timestamp getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Timestamp updatedAt) { this.updatedAt = updatedAt; }

    public boolean isObsolete() { return isObsolete; }
    public void setObsolete(boolean obsolete) { isObsolete = obsolete; }

    public long getGoalGoalId() { return goalGoalId; }
    public void setGoalGoalId(long goalGoalId) { this.goalGoalId = goalGoalId; }

    @Override
    public String toString() {
        return "Transaction{" +
                "transactionId=" + transactionId +
                ", transactionUid='" + transactionUid + '\'' +
                ", userUserId=" + userUserId +
                ", bankAccountBankAccountId=" + bankAccountBankAccountId +
                ", amount=" + amount +
                ", currency='" + currency + '\'' +
                ", transactionDate=" + transactionDate +
                ", postedDate=" + postedDate +
                ", description='" + description + '\'' +
                ", categoryId=" + categoryId +
                ", transactionType='" + transactionType + '\'' +
                ", imported=" + imported +
                ", reconciled=" + reconciled +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                ", isObsolete=" + isObsolete +
                ", goalGoalId=" + goalGoalId +
                '}';
    }
}
