package dao;

import model.GoalContribution;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class GoalContributionDAO {

    private static final String URL = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL";
    private static final String USER = "RM565050";
    private static final String PASSWORD = "080706";

    public Connection conectar() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    // INSERT
    public void insert(GoalContribution contribution) {
        String sql = "INSERT INTO GOAL_CONTRIBUTION (CONTRIBUTION_ID, CONTRIBUTION_UID, GOAL_GOAL_ID, TRANSACTION_TRANSACTION_ID, AMOUNT, CONTRIBUTION_DATE, NOTE, CREATED_AT, IS_OBSOLETE) " +
                "VALUES (GOAL_CONTRIBUTION_SEQ.NEXTVAL, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = conectar();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, contribution.getContributionUid());
            ps.setLong(2, contribution.getGoalGoalId());
            ps.setLong(3, contribution.getTransactionTransactionId());
            ps.setDouble(4, contribution.getAmount());
            ps.setDate(5, contribution.getContributionDate());
            ps.setString(6, contribution.getNote());
            ps.setTimestamp(7, contribution.getCreatedAt());
            ps.setInt(8, contribution.isObsolete() ? 1 : 0);

            ps.executeUpdate();
            System.out.println("Contribuição inserida com sucesso!");

        } catch (SQLException e) {
            System.err.println("Erro ao inserir contribuição: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // SELECT
    public List<GoalContribution> getAll() {
        List<GoalContribution> lista = new ArrayList<>();
        String sql = "SELECT * FROM GOAL_CONTRIBUTION";

        try (Connection conn = conectar();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                GoalContribution contribution = new GoalContribution(
                        rs.getLong("CONTRIBUTION_ID"),
                        rs.getString("CONTRIBUTION_UID"),
                        rs.getLong("GOAL_GOAL_ID"),
                        rs.getLong("TRANSACTION_TRANSACTION_ID"),
                        rs.getDouble("AMOUNT"),
                        rs.getDate("CONTRIBUTION_DATE"),
                        rs.getString("NOTE"),
                        rs.getTimestamp("CREATED_AT"),
                        rs.getInt("IS_OBSOLETE") == 1
                );
                lista.add(contribution);
            }

        } catch (SQLException e) {
            System.err.println("Erro ao consultar contribuições: " + e.getMessage());
            e.printStackTrace();
        }

        return lista;
    }
}
