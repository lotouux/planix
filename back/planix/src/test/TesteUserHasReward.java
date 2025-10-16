package test;

import dao.UserHasRewardDAO;
import model.UserHasReward;

import java.util.List;

public class TesteUserHasReward {
    public static void main(String[] args) {
        UserHasRewardDAO dao = new UserHasRewardDAO();

        // Inserindo 5 registros
        for (int i = 1; i <= 5; i++) {
            UserHasReward relation = new UserHasReward(
                    i,    // REWARD_REWARD_ID
                    100 + i  // USER_USER_ID
            );

            dao.insert(relation);
        }

        // Consultando e exibindo todas as relações
        List<UserHasReward> relations = dao.getAll();
        for (UserHasReward r : relations) {
            System.out.println(r);
        }
    }
}
