package com.fiap.Planix.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.Set;

@Entity
@Table(name = "\"USER\"")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq")
    @SequenceGenerator(name = "user_seq", sequenceName = "USER_ID_USER_SEQ", allocationSize = 1)
    @Column(name = "id_user")
    private Long idUser;

    @Column(name = "name", length = 200, nullable = false)
    private String name;

    @Column(name = "email", length = 100, unique = true, nullable = false)
    private String email;

    @Column(name = "password", length = 255, nullable = false)
    private String password;

    @Column(name = "cpf", length = 11, unique = true, nullable = false)
    private String cpf;

    @Column(name = "phone", length = 20)
    private String phone;

    @Column(name = "birth_date")
    private LocalDate birthDate;

    @Column(name = "preferences", columnDefinition = "CLOB")
    private String preferences;

    @Column(name = "created_at", nullable = false, updatable = false)
    private OffsetDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private OffsetDateTime updatedAt;

    // Relacionamentos

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private Set<AuditLog> auditLogs;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private Set<ChatInteraction> chatInteractions;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private Set<BankConnection> bankConnections;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private Set<Transaction> transactions;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private Set<Goal> goals;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private Set<Pet> pets;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "USER_HAS_REWARD",
            joinColumns = @JoinColumn(name = "USER_id_user"),
            inverseJoinColumns = @JoinColumn(name = "REWARD_id_reward")
    )
    private Set<Reward> rewards;

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public String getPreferences() {
        return preferences;
    }

    public void setPreferences(String preferences) {
        this.preferences = preferences;
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

    public Set<AuditLog> getAuditLogs() {
        return auditLogs;
    }

    public void setAuditLogs(Set<AuditLog> auditLogs) {
        this.auditLogs = auditLogs;
    }

    public Set<ChatInteraction> getChatInteractions() {
        return chatInteractions;
    }

    public void setChatInteractions(Set<ChatInteraction> chatInteractions) {
        this.chatInteractions = chatInteractions;
    }

    public Set<BankConnection> getBankConnections() {
        return bankConnections;
    }

    public void setBankConnections(Set<BankConnection> bankConnections) {
        this.bankConnections = bankConnections;
    }

    public Set<Transaction> getTransactions() {
        return transactions;
    }

    public void setTransactions(Set<Transaction> transactions) {
        this.transactions = transactions;
    }

    public Set<Goal> getGoals() {
        return goals;
    }

    public void setGoals(Set<Goal> goals) {
        this.goals = goals;
    }

    public Set<Pet> getPets() {
        return pets;
    }

    public void setPets(Set<Pet> pets) {
        this.pets = pets;
    }

    public Set<Reward> getRewards() {
        return rewards;
    }

    public void setRewards(Set<Reward> rewards) {
        this.rewards = rewards;
    }
}