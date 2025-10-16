package dao;

import model.Transaction;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class TransactionDAO {

    private static final String URL = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL";
    private static final String USER = "RM565050";
    private static final String PASSWORD = "080706";

    public Connection conectar() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    // INSERT
    public void insert(Transaction tx) {
        String sql = "INSERT INTO TRANSACTION (TRANSACTION_ID, TRANSACTION_UID, USER_USER_ID, BANK_ACCOUNT_BANK_ACCOUNT_ID, " +
                "AMOUNT, CURRENCY, TRANSACTION_DATE, POSTED_DATE, DESCRIPTION, CATEGORY_ID, TRANSACTION_TYPE, IMPORTED, RECONCILED, " +
                "CREATED_AT, UPDATED_AT, IS_OBSOLETE, GOAL_GOAL_ID) " +
                "VALUES (TRANSACTION_SEQ.NEXTVAL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = conectar();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, tx.getTransactionUid());
            ps.setLong(2, tx.getUserUserId());
            ps.setLong(3, tx.getBankAccountBankAccountId());
            ps.setDouble(4, tx.getAmount());
            ps.setString(5, tx.getCurrency());
            ps.setDate(6, tx.getTransactionDate());
            ps.setDate(7, tx.getPostedDate());
            ps.setString(8, tx.getDescription());
            if (tx.getCategoryId() != null)
                ps.setLong(9, tx.getCategoryId());
            else
                ps.setNull(9, Types.NUMERIC);
            ps.setString(10, tx.getTransactionType());
            ps.setInt(11, tx.isImported() ? 1 : 0);
            ps.setInt(12, tx.isReconciled() ? 1 : 0);
            ps.setTimestamp(13, tx.getCreatedAt());
            ps.setTimestamp(14, tx.getUpdatedAt());
            ps.setInt(15, tx.isObsolete() ? 1 : 0);
            ps.setLong(16, tx.getGoalGoalId());

            ps.executeUpdate();
            System.out.println("Transação inserida com sucesso!");

        } catch (SQLException e) {
            System.err.println("Erro ao inserir transação: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // SELECT (getAll)
    public List<Transaction> getAll() {
        List<Transaction> lista = new ArrayList<>();
        String sql = "SELECT * FROM TRANSACTION";

        try (Connection conn = conectar();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                Transaction tx = new Transaction(
                        rs.getLong("TRANSACTION_ID"),
                        rs.getString("TRANSACTION_UID"),
                        rs.getLong("USER_USER_ID"),
                        rs.getLong("BANK_ACCOUNT_BANK_ACCOUNT_ID"),
                        rs.getDouble("AMOUNT"),
                        rs.getString("CURRENCY"),
                        rs.getDate("TRANSACTION_DATE"),
                        rs.getDate("POSTED_DATE"),
                        rs.getString("DESCRIPTION"),
                        rs.getObject("CATEGORY_ID") != null ? rs.getLong("CATEGORY_ID") : null,
                        rs.getString("TRANSACTION_TYPE"),
                        rs.getInt("IMPORTED") == 1,
                        rs.getInt("RECONCILED") == 1,
                        rs.getTimestamp("CREATED_AT"),
                        rs.getTimestamp("UPDATED_AT"),
                        rs.getInt("IS_OBSOLETE") == 1,
                        rs.getLong("GOAL_GOAL_ID")
                );
                lista.add(tx);
            }

        } catch (SQLException e) {
            System.err.println("Erro ao consultar transações: " + e.getMessage());
            e.printStackTrace();
        }

        return lista;
    }
}
