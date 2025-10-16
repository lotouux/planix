package model;

import java.sql.Timestamp;

public class BankConnection {
    private long connectionId;
    private String connectionUid;
    private long userUserId;
    private String providerName;
    private String connectionStatus;
    private Timestamp lastSyncAt;
    private String tokenMeta;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private boolean isObsolete;

    // Construtor completo
    public BankConnection(long connectionId, String connectionUid, long userUserId, String providerName,
                          String connectionStatus, Timestamp lastSyncAt, String tokenMeta,
                          Timestamp createdAt, Timestamp updatedAt, boolean isObsolete) {
        this.connectionId = connectionId;
        this.connectionUid = connectionUid;
        this.userUserId = userUserId;
        this.providerName = providerName;
        this.connectionStatus = connectionStatus;
        this.lastSyncAt = lastSyncAt;
        this.tokenMeta = tokenMeta;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isObsolete = isObsolete;
    }

    // Construtor sem ID (para insert)
    public BankConnection(String connectionUid, long userUserId, String providerName,
                          String connectionStatus, Timestamp lastSyncAt, String tokenMeta,
                          Timestamp createdAt, Timestamp updatedAt, boolean isObsolete) {
        this(0, connectionUid, userUserId, providerName, connectionStatus, lastSyncAt, tokenMeta, createdAt, updatedAt, isObsolete);
    }

    // Getters e Setters
    public long getConnectionId() { return connectionId; }
    public void setConnectionId(long connectionId) { this.connectionId = connectionId; }

    public String getConnectionUid() { return connectionUid; }
    public void setConnectionUid(String connectionUid) { this.connectionUid = connectionUid; }

    public long getUserUserId() { return userUserId; }
    public void setUserUserId(long userUserId) { this.userUserId = userUserId; }

    public String getProviderName() { return providerName; }
    public void setProviderName(String providerName) { this.providerName = providerName; }

    public String getConnectionStatus() { return connectionStatus; }
    public void setConnectionStatus(String connectionStatus) { this.connectionStatus = connectionStatus; }

    public Timestamp getLastSyncAt() { return lastSyncAt; }
    public void setLastSyncAt(Timestamp lastSyncAt) { this.lastSyncAt = lastSyncAt; }

    public String getTokenMeta() { return tokenMeta; }
    public void setTokenMeta(String tokenMeta) { this.tokenMeta = tokenMeta; }

    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }

    public Timestamp getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Timestamp updatedAt) { this.updatedAt = updatedAt; }

    public boolean isObsolete() { return isObsolete; }
    public void setObsolete(boolean obsolete) { isObsolete = obsolete; }

    @Override
    public String toString() {
        return "BankConnection{" +
                "connectionId=" + connectionId +
                ", connectionUid='" + connectionUid + '\'' +
                ", userUserId=" + userUserId +
                ", providerName='" + providerName + '\'' +
                ", connectionStatus='" + connectionStatus + '\'' +
                ", lastSyncAt=" + lastSyncAt +
                ", tokenMeta='" + tokenMeta + '\'' +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                ", isObsolete=" + isObsolete +
                '}';
    }
}
