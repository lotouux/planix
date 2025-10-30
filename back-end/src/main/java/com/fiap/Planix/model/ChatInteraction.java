package com.fiap.Planix.model;

import jakarta.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Table(name = "CHAT_INTERACTION")
public class ChatInteraction {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "chat_seq")
    @SequenceGenerator(name = "chat_seq", sequenceName = "CHAT_INTERACTION_ID_CHAT_INTER_SEQ", allocationSize = 1)
    @Column(name = "id_chat_interaction")
    private Long idChatInteraction;

    @Column(name = "session_id", length = 100)
    private String sessionId;

    @Column(name = "question", columnDefinition = "CLOB", nullable = false)
    private String question;

    @Column(name = "response", columnDefinition = "CLOB")
    private String response;

    @Column(name = "timestamp", nullable = false)
    private OffsetDateTime timestamp;

    // Relacionamentos

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_id_user", nullable = false)
    private User user;

    public Long getIdChatInteraction() {
        return idChatInteraction;
    }

    public void setIdChatInteraction(Long idChatInteraction) {
        this.idChatInteraction = idChatInteraction;
    }

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
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