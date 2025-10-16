package test;

import dao.GoalDAO;
import model.Goal;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

public class TesteGoal {
    public static void main(String[] args) {
        GoalDAO dao = new GoalDAO();

        // Inserindo 5 metas
        for (int i = 1; i <= 5; i++) {
            Goal goal = new Goal(
                    UUID.randomUUID().toString(), // GOAL_UID
                    700 + i,                       // USER_USER_ID
                    "Meta " + i,                   // NAME
                    1000.0 + i * 100,              // TARGET_AMOUNT
                    100.0 + i * 10,                // CURRENT_AMOUNT
                    new Date(System.currentTimeMillis()), // START_DATE
                    null,                            // END_DATE
                    "ACTIVE",                       // STATUS
                    i,                               // PRIORITY
                    new Timestamp(System.currentTimeMillis()), // CREATED_AT
                    null,                            // UPDATED_AT
                    false                            // IS_OBSOLETE
            );

            dao.insert(goal);
        }

        // Consultando e exibindo todas as metas
        List<Goal> goals = dao.getAll();
        for (Goal goal : goals) {
            System.out.println(goal);
        }
    }
}
