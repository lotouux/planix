package com.fiap.Planix.model;

import jakarta.persistence.*;
import java.time.OffsetDateTime;
import java.util.Set;

@Entity
@Table(name = "BANK_CONNECTION")
public class BankConnection {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "bank_conn_seq")
    @SequenceGenerator(name = "bank_conn_seq", sequenceName = "BANK_CONNECTION_ID_BANK_CONN_SEQ", allocationSize = 1)
    @Column(name = "id_bank_connection")
    private Long idBankConnection;

    @Column(name = "provider_name", length = 100, nullable = false)
    private String providerName;

    @Column(name = "api_key", length = 255)
    private String apiKey;

    @Column(name = "status", length = 50)
    private String status;

    @Column(name = "created_at", nullable = false, updatable = false)
    private OffsetDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private OffsetDateTime updatedAt;

    // Relacionamentos

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_id_user", nullable = false)
    private User user;

    @OneToMany(mappedBy = "bankConnection", fetch = FetchType.LAZY)
    private Set<BankAccount> bankAccounts;

    public Long getIdBankConnection() {
        return idBankConnection;
    }

    public void setIdBankConnection(Long idBankConnection) {
        this.idBankConnection = idBankConnection;
    }

    public String getProviderName() {
        return providerName;
    }

    public void setProviderName(String providerName) {
        this.providerName = providerName;
    }

    public String getApiKey() {
        return apiKey;
    }

    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public OffsetDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public OffsetDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<BankAccount> getBankAccounts() {
        return bankAccounts;
    }

    public void setBankAccounts(Set<BankAccount> bankAccounts) {
        this.bankAccounts = bankAccounts;
    }
}