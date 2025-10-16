package test;

import dao.BankConnectionDAO;
import model.BankConnection;

import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

public class TesteBankConnection {
    public static void main(String[] args) {
        BankConnectionDAO dao = new BankConnectionDAO();

        // Inserindo 5 conexões
        for (int i = 1; i <= 5; i++) {
            BankConnection connection = new BankConnection(
                    UUID.randomUUID().toString(),   // CONNECTION_UID
                    300 + i,                        // USER_USER_ID
                    "Provider " + i,                // PROVIDER_NAME
                    "ACTIVE",                        // CONNECTION_STATUS
                    new Timestamp(System.currentTimeMillis()), // LAST_SYNC_AT
                    "{\"token\": \"abc" + i + "\"}", // TOKEN_META
                    new Timestamp(System.currentTimeMillis()), // CREATED_AT
                    null,                            // UPDATED_AT
                    false                            // IS_OBSOLETE
            );

            dao.insert(connection);
        }

        // Consultando e exibindo todas as conexões
        List<BankConnection> connections = dao.getAll();
        for (BankConnection connection : connections) {
            System.out.println(connection);
        }
    }
}
