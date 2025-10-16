package dao;

import model.BankAccount;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class BankAccountDAO {

    private static final String URL = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL";
    private static final String USER = "RM565050";
    private static final String PASSWORD = "080706";

    public Connection conectar() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    // INSERT
    public void insert(BankAccount account) {
        String sql = "INSERT INTO BANK_ACCOUNT (BANK_ACCOUNT_ID, BANK_ACCOUNT_UID, BANK_CONNECTION_CONNECTION_ID, ACCOUNT_MASKED, ACCOUNT_TYPE, CURRENCY, LAST_BALANCE, CREATED_AT, UPDATED_AT, IS_OBSOLETE) " +
                "VALUES (BANK_ACCOUNT_SEQ.NEXTVAL, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = conectar();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, account.getBankAccountUid());
            ps.setLong(2, account.getBankConnectionId());
            ps.setString(3, account.getAccountMasked());
            ps.setString(4, account.getAccountType());
            ps.setString(5, account.getCurrency());
            ps.setDouble(6, account.getLastBalance());
            ps.setTimestamp(7, account.getCreatedAt());
            ps.setTimestamp(8, account.getUpdatedAt());
            ps.setInt(9, account.isObsolete() ? 1 : 0);

            ps.executeUpdate();
            System.out.println("Conta bancária inserida com sucesso!");

        } catch (SQLException e) {
            System.err.println("Erro ao inserir conta: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // SELECT
    public List<BankAccount> getAll() {
        List<BankAccount> lista = new ArrayList<>();
        String sql = "SELECT * FROM BANK_ACCOUNT";

        try (Connection conn = conectar();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                BankAccount account = new BankAccount(
                        rs.getLong("BANK_ACCOUNT_ID"),
                        rs.getString("BANK_ACCOUNT_UID"),
                        rs.getLong("BANK_CONNECTION_CONNECTION_ID"),
                        rs.getString("ACCOUNT_MASKED"),
                        rs.getString("ACCOUNT_TYPE"),
                        rs.getString("CURRENCY"),
                        rs.getDouble("LAST_BALANCE"),
                        rs.getTimestamp("CREATED_AT"),
                        rs.getTimestamp("UPDATED_AT"),
                        rs.getInt("IS_OBSOLETE") == 1
                );
                lista.add(account);
            }

        } catch (SQLException e) {
            System.err.println("Erro ao consultar contas: " + e.getMessage());
            e.printStackTrace();
        }

        return lista;
    }
}
