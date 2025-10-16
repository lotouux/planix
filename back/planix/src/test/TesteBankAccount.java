package test;

import dao.BankAccountDAO;
import model.BankAccount;

import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

public class TesteBankAccount {
    public static void main(String[] args) {
        BankAccountDAO dao = new BankAccountDAO();

        // Inserindo 5 contas
        for (int i = 1; i <= 5; i++) {
            BankAccount account = new BankAccount(
                    UUID.randomUUID().toString(),  // BANK_ACCOUNT_UID
                    200 + i,                       // BANK_CONNECTION_CONNECTION_ID
                    "****" + i + "1234",           // ACCOUNT_MASKED
                    "Corrente",                     // ACCOUNT_TYPE
                    "BRL",                          // CURRENCY
                    1000.0 * i,                     // LAST_BALANCE
                    new Timestamp(System.currentTimeMillis()), // CREATED_AT
                    null,                            // UPDATED_AT
                    false                            // IS_OBSOLETE
            );

            dao.insert(account);
        }

        // Consultando e exibindo todas as contas
        List<BankAccount> accounts = dao.getAll();
        for (BankAccount account : accounts) {
            System.out.println(account);
        }
    }
}
