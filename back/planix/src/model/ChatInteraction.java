package model;

import java.sql.Timestamp;

public class ChatInteraction {
    private long chatId;
    private String chatUid;
    private long userUserId;
    private String messageText;
    private String senderType;
    private Timestamp messageTimestamp;
    private Double sentimentScore;
    private String contextMeta;
    private boolean isObsolete;

    // Construtor completo
    public ChatInteraction(long chatId, String chatUid, long userUserId, String messageText, String senderType,
                           Timestamp messageTimestamp, Double sentimentScore, String contextMeta, boolean isObsolete) {
        this.chatId = chatId;
        this.chatUid = chatUid;
        this.userUserId = userUserId;
        this.messageText = messageText;
        this.senderType = senderType;
        this.messageTimestamp = messageTimestamp;
        this.sentimentScore = sentimentScore;
        this.contextMeta = contextMeta;
        this.isObsolete = isObsolete;
    }

    // Construtor sem ID (para insert)
    public ChatInteraction(String chatUid, long userUserId, String messageText, String senderType,
                           Timestamp messageTimestamp, Double sentimentScore, String contextMeta, boolean isObsolete) {
        this(0, chatUid, userUserId, messageText, senderType, messageTimestamp, sentimentScore, contextMeta, isObsolete);
    }

    // Getters e Setters
    public long getChatId() { return chatId; }
    public void setChatId(long chatId) { this.chatId = chatId; }

    public String getChatUid() { return chatUid; }
    public void setChatUid(String chatUid) { this.chatUid = chatUid; }

    public long getUserUserId() { return userUserId; }
    public void setUserUserId(long userUserId) { this.userUserId = userUserId; }

    public String getMessageText() { return messageText; }
    public void setMessageText(String messageText) { this.messageText = messageText; }

    public String getSenderType() { return senderType; }
    public void setSenderType(String senderType) { this.senderType = senderType; }

    public Timestamp getMessageTimestamp() { return messageTimestamp; }
    public void setMessageTimestamp(Timestamp messageTimestamp) { this.messageTimestamp = messageTimestamp; }

    public Double getSentimentScore() { return sentimentScore; }
    public void setSentimentScore(Double sentimentScore) { this.sentimentScore = sentimentScore; }

    public String getContextMeta() { return contextMeta; }
    public void setContextMeta(String contextMeta) { this.contextMeta = contextMeta; }

    public boolean isObsolete() { return isObsolete; }
    public void setObsolete(boolean obsolete) { isObsolete = obsolete; }

    @Override
    public String toString() {
        return "ChatInteraction{" +
                "chatId=" + chatId +
                ", chatUid='" + chatUid + '\'' +
                ", userUserId=" + userUserId +
                ", messageText='" + messageText + '\'' +
                ", senderType='" + senderType + '\'' +
                ", messageTimestamp=" + messageTimestamp +
                ", sentimentScore=" + sentimentScore +
                ", contextMeta='" + contextMeta + '\'' +
                ", isObsolete=" + isObsolete +
                '}';
    }
}
