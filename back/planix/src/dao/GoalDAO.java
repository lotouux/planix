package dao;

import model.Goal;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class GoalDAO {

    private static final String URL = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL";
    private static final String USER = "RM565050";
    private static final String PASSWORD = "080706";

    public Connection conectar() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    // INSERT
    public void insert(Goal goal) {
        String sql = "INSERT INTO GOAL (GOAL_ID, GOAL_UID, USER_USER_ID, NAME, TARGET_AMOUNT, CURRENT_AMOUNT, START_DATE, END_DATE, STATUS, PRIORITY, CREATED_AT, UPDATED_AT, IS_OBSOLETE) " +
                "VALUES (GOAL_SEQ.NEXTVAL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = conectar();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, goal.getGoalUid());
            ps.setLong(2, goal.getUserUserId());
            ps.setString(3, goal.getName());
            ps.setDouble(4, goal.getTargetAmount());
            ps.setDouble(5, goal.getCurrentAmount());
            ps.setDate(6, goal.getStartDate());
            ps.setDate(7, goal.getEndDate());
            ps.setString(8, goal.getStatus());
            ps.setInt(9, goal.getPriority());
            ps.setTimestamp(10, goal.getCreatedAt());
            ps.setTimestamp(11, goal.getUpdatedAt());
            ps.setInt(12, goal.isObsolete() ? 1 : 0);

            ps.executeUpdate();
            System.out.println("Meta inserida com sucesso!");

        } catch (SQLException e) {
            System.err.println("Erro ao inserir meta: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // SELECT
    public List<Goal> getAll() {
        List<Goal> lista = new ArrayList<>();
        String sql = "SELECT * FROM GOAL";

        try (Connection conn = conectar();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                Goal goal = new Goal(
                        rs.getLong("GOAL_ID"),
                        rs.getString("GOAL_UID"),
                        rs.getLong("USER_USER_ID"),
                        rs.getString("NAME"),
                        rs.getDouble("TARGET_AMOUNT"),
                        rs.getDouble("CURRENT_AMOUNT"),
                        rs.getDate("START_DATE"),
                        rs.getDate("END_DATE"),
                        rs.getString("STATUS"),
                        rs.getInt("PRIORITY"),
                        rs.getTimestamp("CREATED_AT"),
                        rs.getTimestamp("UPDATED_AT"),
                        rs.getInt("IS_OBSOLETE") == 1
                );
                lista.add(goal);
            }

        } catch (SQLException e) {
            System.err.println("Erro ao consultar metas: " + e.getMessage());
            e.printStackTrace();
        }

        return lista;
    }
}
