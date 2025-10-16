package model;

public class UserHasReward {
    private long rewardRewardId;
    private long userUserId;

    // Construtor completo
    public UserHasReward(long rewardRewardId, long userUserId) {
        this.rewardRewardId = rewardRewardId;
        this.userUserId = userUserId;
    }

    // Construtor sem ID (não necessário, pois não há PK auto)
    public UserHasReward() {}

    // Getters e Setters
    public long getRewardRewardId() { return rewardRewardId; }
    public void setRewardRewardId(long rewardRewardId) { this.rewardRewardId = rewardRewardId; }

    public long getUserUserId() { return userUserId; }
    public void setUserUserId(long userUserId) { this.userUserId = userUserId; }

    @Override
    public String toString() {
        return "UserHasReward{" +
                "rewardRewardId=" + rewardRewardId +
                ", userUserId=" + userUserId +
                '}';
    }
}
