package model;

import java.sql.Timestamp;
import java.sql.Date;

public class User {
    private long userId;
    private String userUid;
    private String email;
    private String fullName;
    private String phone;
    private Date birthDate;
    private String countryCurrency;
    private String locale;
    private String status;
    private String preferences; // CLOB → String em Java
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private boolean isObsolete;

    // Construtor completo
    public User(long userId, String userUid, String email, String fullName, String phone, Date birthDate,
                String countryCurrency, String locale, String status, String preferences,
                Timestamp createdAt, Timestamp updatedAt, boolean isObsolete) {
        this.userId = userId;
        this.userUid = userUid;
        this.email = email;
        this.fullName = fullName;
        this.phone = phone;
        this.birthDate = birthDate;
        this.countryCurrency = countryCurrency;
        this.locale = locale;
        this.status = status;
        this.preferences = preferences;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isObsolete = isObsolete;
    }

    // Construtor sem ID (para inserts automáticos)
    public User(String userUid, String email, String fullName, String phone, Date birthDate,
                String countryCurrency, String locale, String status, String preferences,
                Timestamp createdAt, Timestamp updatedAt, boolean isObsolete) {
        this(0, userUid, email, fullName, phone, birthDate, countryCurrency, locale, status,
                preferences, createdAt, updatedAt, isObsolete);
    }

    // Getters e Setters
    public long getUserId() { return userId; }
    public void setUserId(long userId) { this.userId = userId; }

    public String getUserUid() { return userUid; }
    public void setUserUid(String userUid) { this.userUid = userUid; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public Date getBirthDate() { return birthDate; }
    public void setBirthDate(Date birthDate) { this.birthDate = birthDate; }

    public String getCountryCurrency() { return countryCurrency; }
    public void setCountryCurrency(String countryCurrency) { this.countryCurrency = countryCurrency; }

    public String getLocale() { return locale; }
    public void setLocale(String locale) { this.locale = locale; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getPreferences() { return preferences; }
    public void setPreferences(String preferences) { this.preferences = preferences; }

    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }

    public Timestamp getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Timestamp updatedAt) { this.updatedAt = updatedAt; }

    public boolean isObsolete() { return isObsolete; }
    public void setObsolete(boolean obsolete) { isObsolete = obsolete; }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", userUid='" + userUid + '\'' +
                ", email='" + email + '\'' +
                ", fullName='" + fullName + '\'' +
                ", phone='" + phone + '\'' +
                ", birthDate=" + birthDate +
                ", countryCurrency='" + countryCurrency + '\'' +
                ", locale='" + locale + '\'' +
                ", status='" + status + '\'' +
                ", preferences='" + preferences + '\'' +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                ", isObsolete=" + isObsolete +
                '}';
    }
}
