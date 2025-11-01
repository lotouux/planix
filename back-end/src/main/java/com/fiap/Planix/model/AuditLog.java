package com.fiap.Planix.model;

import jakarta.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Table(name = "AUDIT_LOG")
public class AuditLog {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "audit_log_seq")
    @SequenceGenerator(name = "audit_log_seq", sequenceName = "AUDIT_LOG_ID_AUDIT_LOG_SEQ", allocationSize = 1)
    @Column(name = "id_audit_log")
    private Long idAuditLog;

    @Column(name = "action", length = 100, nullable = false)
    private String action;

    @Column(name = "details", columnDefinition = "CLOB")
    private String details;

    @Column(name = "timestamp", nullable = false)
    private OffsetDateTime timestamp;

    // Relacionamentos

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_id_user", nullable = false)
    private User user;

    public Long getIdAuditLog() {
        return idAuditLog;
    }

    public void setIdAuditLog(Long idAuditLog) {
        this.idAuditLog = idAuditLog;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public OffsetDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}