package model;

import java.sql.Timestamp;

public class BankAccount {
    private long bankAccountId;
    private String bankAccountUid;
    private long bankConnectionId;
    private String accountMasked;
    private String accountType;
    private String currency;
    private double lastBalance;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private boolean isObsolete;

    // Construtor completo
    public BankAccount(long bankAccountId, String bankAccountUid, long bankConnectionId, String accountMasked,
                       String accountType, String currency, double lastBalance, Timestamp createdAt,
                       Timestamp updatedAt, boolean isObsolete) {
        this.bankAccountId = bankAccountId;
        this.bankAccountUid = bankAccountUid;
        this.bankConnectionId = bankConnectionId;
        this.accountMasked = accountMasked;
        this.accountType = accountType;
        this.currency = currency;
        this.lastBalance = lastBalance;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isObsolete = isObsolete;
    }

    // Construtor sem ID (para insert)
    public BankAccount(String bankAccountUid, long bankConnectionId, String accountMasked,
                       String accountType, String currency, double lastBalance, Timestamp createdAt,
                       Timestamp updatedAt, boolean isObsolete) {
        this(0, bankAccountUid, bankConnectionId, accountMasked, accountType, currency, lastBalance, createdAt, updatedAt, isObsolete);
    }

    // Getters e Setters
    public long getBankAccountId() { return bankAccountId; }
    public void setBankAccountId(long bankAccountId) { this.bankAccountId = bankAccountId; }

    public String getBankAccountUid() { return bankAccountUid; }
    public void setBankAccountUid(String bankAccountUid) { this.bankAccountUid = bankAccountUid; }

    public long getBankConnectionId() { return bankConnectionId; }
    public void setBankConnectionId(long bankConnectionId) { this.bankConnectionId = bankConnectionId; }

    public String getAccountMasked() { return accountMasked; }
    public void setAccountMasked(String accountMasked) { this.accountMasked = accountMasked; }

    public String getAccountType() { return accountType; }
    public void setAccountType(String accountType) { this.accountType = accountType; }

    public String getCurrency() { return currency; }
    public void setCurrency(String currency) { this.currency = currency; }

    public double getLastBalance() { return lastBalance; }
    public void setLastBalance(double lastBalance) { this.lastBalance = lastBalance; }

    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }

    public Timestamp getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Timestamp updatedAt) { this.updatedAt = updatedAt; }

    public boolean isObsolete() { return isObsolete; }
    public void setObsolete(boolean obsolete) { isObsolete = obsolete; }

    @Override
    public String toString() {
        return "BankAccount{" +
                "bankAccountId=" + bankAccountId +
                ", bankAccountUid='" + bankAccountUid + '\'' +
                ", bankConnectionId=" + bankConnectionId +
                ", accountMasked='" + accountMasked + '\'' +
                ", accountType='" + accountType + '\'' +
                ", currency='" + currency + '\'' +
                ", lastBalance=" + lastBalance +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                ", isObsolete=" + isObsolete +
                '}';
    }
}
