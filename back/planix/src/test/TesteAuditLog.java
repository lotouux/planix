package test;

import dao.AuditLogDAO;
import model.AuditLog;

import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

public class TesteAuditLog {
    public static void main(String[] args) {
        AuditLogDAO dao = new AuditLogDAO();

        // Inserindo 5 registros
        for (int i = 1; i <= 5; i++) {
            AuditLog log = new AuditLog(
                    UUID.randomUUID().toString(),  // AUDIT_UID
                    100 + i,                       // USER_USER_ID
                    "INSERT",                      // ACTION_TYPE
                    "TB_EXEMPLO",                  // TARGET_TABLE
                    "ID-" + i,                     // TARGET_ID
                    new Timestamp(System.currentTimeMillis()), // ACTION_TIMESTAMP
                    "Detalhes do log " + i,        // DETAILS
                    "192.168.0." + i,              // IP_ADDRESS
                    "Mozilla/5.0",                 // USER_AGENT
                    false                          // IS_OBSOLETE
            );

            dao.insert(log);
        }

        // Consultando e exibindo todos os registros
        List<AuditLog> logs = dao.getAll();
        for (AuditLog log : logs) {
            System.out.println(log);
        }
    }
}
