package test;

import dao.GoalContributionDAO;
import model.GoalContribution;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

public class TesteGoalContribution {
    public static void main(String[] args) {
        GoalContributionDAO dao = new GoalContributionDAO();

        // Inserindo 5 contribuições
        for (int i = 1; i <= 5; i++) {
            GoalContribution contribution = new GoalContribution(
                    UUID.randomUUID().toString(),  // CONTRIBUTION_UID
                    1 + i,                         // GOAL_GOAL_ID
                    1000 + i,                      // TRANSACTION_TRANSACTION_ID
                    200.0 + i * 10,                // AMOUNT
                    new Date(System.currentTimeMillis()), // CONTRIBUTION_DATE
                    "Nota " + i,                   // NOTE
                    new Timestamp(System.currentTimeMillis()), // CREATED_AT
                    false                           // IS_OBSOLETE
            );

            dao.insert(contribution);
        }

        // Consultando e exibindo todas as contribuições
        List<GoalContribution> contributions = dao.getAll();
        for (GoalContribution contribution : contributions) {
            System.out.println(contribution);
        }
    }
}
