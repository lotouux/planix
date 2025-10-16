package model;

import java.sql.Timestamp;

public class AuditLog {
    private long auditId;
    private String auditUid;
    private long userUserId;
    private String actionType;
    private String targetTable;
    private String targetId;
    private Timestamp actionTimestamp;
    private String details;
    private String ipAddress;
    private String userAgent;
    private boolean isObsolete;

    // Construtor completo
    public AuditLog(long auditId, String auditUid, long userUserId, String actionType, String targetTable,
                    String targetId, Timestamp actionTimestamp, String details, String ipAddress,
                    String userAgent, boolean isObsolete) {
        this.auditId = auditId;
        this.auditUid = auditUid;
        this.userUserId = userUserId;
        this.actionType = actionType;
        this.targetTable = targetTable;
        this.targetId = targetId;
        this.actionTimestamp = actionTimestamp;
        this.details = details;
        this.ipAddress = ipAddress;
        this.userAgent = userAgent;
        this.isObsolete = isObsolete;
    }

    // Construtor sem ID (para inserts automáticos)
    public AuditLog(String auditUid, long userUserId, String actionType, String targetTable,
                    String targetId, Timestamp actionTimestamp, String details, String ipAddress,
                    String userAgent, boolean isObsolete) {
        this(0, auditUid, userUserId, actionType, targetTable, targetId, actionTimestamp, details, ipAddress, userAgent, isObsolete);
    }

    // Getters e Setters
    public long getAuditId() { return auditId; }
    public void setAuditId(long auditId) { this.auditId = auditId; }

    public String getAuditUid() { return auditUid; }
    public void setAuditUid(String auditUid) { this.auditUid = auditUid; }

    public long getUserUserId() { return userUserId; }
    public void setUserUserId(long userUserId) { this.userUserId = userUserId; }

    public String getActionType() { return actionType; }
    public void setActionType(String actionType) { this.actionType = actionType; }

    public String getTargetTable() { return targetTable; }
    public void setTargetTable(String targetTable) { this.targetTable = targetTable; }

    public String getTargetId() { return targetId; }
    public void setTargetId(String targetId) { this.targetId = targetId; }

    public Timestamp getActionTimestamp() { return actionTimestamp; }
    public void setActionTimestamp(Timestamp actionTimestamp) { this.actionTimestamp = actionTimestamp; }

    public String getDetails() { return details; }
    public void setDetails(String details) { this.details = details; }

    public String getIpAddress() { return ipAddress; }
    public void setIpAddress(String ipAddress) { this.ipAddress = ipAddress; }

    public String getUserAgent() { return userAgent; }
    public void setUserAgent(String userAgent) { this.userAgent = userAgent; }

    public boolean isObsolete() { return isObsolete; }
    public void setObsolete(boolean obsolete) { isObsolete = obsolete; }

    @Override
    public String toString() {
        return "AuditLog{" +
                "auditId=" + auditId +
                ", auditUid='" + auditUid + '\'' +
                ", userUserId=" + userUserId +
                ", actionType='" + actionType + '\'' +
                ", targetTable='" + targetTable + '\'' +
                ", targetId='" + targetId + '\'' +
                ", actionTimestamp=" + actionTimestamp +
                ", details='" + details + '\'' +
                ", ipAddress='" + ipAddress + '\'' +
                ", userAgent='" + userAgent + '\'' +
                ", isObsolete=" + isObsolete +
                '}';
    }
}
