package test;

import dao.TransactionDAO;
import model.Transaction;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

public class TesteTransaction {
    public static void main(String[] args) {
        TransactionDAO dao = new TransactionDAO();

        // Inserindo 3 registros de exemplo
        for (int i = 1; i <= 3; i++) {
            Transaction tx = new Transaction(
                    UUID.randomUUID().toString(),
                    200 + i,                        // USER_USER_ID
                    300 + i,                        // BANK_ACCOUNT_BANK_ACCOUNT_ID
                    150.75 * i,                     // AMOUNT
                    "BRL",                          // CURRENCY
                    new Date(System.currentTimeMillis()),
                    new Date(System.currentTimeMillis()),
                    "Compra teste " + i,
                    null,                            // CATEGORY_ID
                    "EXPENSE",                       // TRANSACTION_TYPE
                    false,                           // IMPORTED
                    false,                           // RECONCILED
                    new Timestamp(System.currentTimeMillis()),
                    new Timestamp(System.currentTimeMillis()),
                    false,                           // IS_OBSOLETE
                    400 + i                          // GOAL_GOAL_ID
            );

            dao.insert(tx);
        }

        // Consultando e exibindo todas as transações
        List<Transaction> transacoes = dao.getAll();
        for (Transaction t : transacoes) {
            System.out.println(t);
        }
    }
}
