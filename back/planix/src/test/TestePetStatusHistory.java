package test;

import dao.PetStatusHistoryDAO;
import model.PetStatusHistory;

import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

public class TestePetStatusHistory {
    public static void main(String[] args) {
        PetStatusHistoryDAO dao = new PetStatusHistoryDAO();

        // Inserindo 5 históricos de pets
        for (int i = 1; i <= 5; i++) {
            PetStatusHistory history = new PetStatusHistory(
                    UUID.randomUUID().toString(),    // HISTORY_UID
                    200 + i,                         // PET_PET_ID
                    (i % 2 == 0) ? "Feliz" : "Triste", // PREVIOUS_MOOD
                    (i % 2 == 0) ? "Animado" : "Calmo", // NEW_MOOD
                    "Alteração de humor automática " + i, // CHANGE_REASON
                    new Timestamp(System.currentTimeMillis()), // EVALUATED_AT
                    new Timestamp(System.currentTimeMillis()), // CREATED_AT
                    false                            // IS_OBSOLETE
            );

            dao.insert(history);
        }

        // Consultando todos os históricos
        List<PetStatusHistory> histories = dao.getAll();
        for (PetStatusHistory h : histories) {
            System.out.println(h);
        }
    }
}
