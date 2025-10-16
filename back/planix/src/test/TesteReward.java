package test;

import dao.RewardDAO;
import model.Reward;

import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

public class TesteReward {
    public static void main(String[] args) {
        RewardDAO dao = new RewardDAO();

        // Inserindo 5 recompensas
        for (int i = 1; i <= 5; i++) {
            Reward reward = new Reward(
                    UUID.randomUUID().toString(),          // REWARD_UID
                    "Recompensa " + i,                     // TITLE
                    "Descrição da recompensa " + i,        // DESCRIPTION
                    100 * i,                               // POINTS_REQUIRED
                    true,                                  // IS_ACTIVE
                    new Timestamp(System.currentTimeMillis()), // CREATED_AT
                    null,                                  // UPDATED_AT
                    false                                  // IS_OBSOLETE
            );

            dao.insert(reward);
        }

        // Consultando e exibindo todas as recompensas
        List<Reward> rewards = dao.getAll();
        for (Reward r : rewards) {
            System.out.println(r);
        }
    }
}
