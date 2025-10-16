package dao;

import model.Reward;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class RewardDAO {

    private static final String URL = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL";
    private static final String USER = "RM565050";
    private static final String PASSWORD = "080706";

    public Connection conectar() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    // INSERT
    public void insert(Reward reward) {
        String sql = "INSERT INTO REWARD (REWARD_ID, REWARD_UID, TITLE, DESCRIPTION, POINTS_REQUIRED, IS_ACTIVE, CREATED_AT, UPDATED_AT, IS_OBSOLETE) " +
                "VALUES (REWARD_SEQ.NEXTVAL, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = conectar();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, reward.getRewardUid());
            ps.setString(2, reward.getTitle());
            ps.setString(3, reward.getDescription());
            ps.setLong(4, reward.getPointsRequired());
            ps.setInt(5, reward.isActive() ? 1 : 0);
            ps.setTimestamp(6, reward.getCreatedAt());
            ps.setTimestamp(7, reward.getUpdatedAt());
            ps.setInt(8, reward.isObsolete() ? 1 : 0);

            ps.executeUpdate();
            System.out.println("Recompensa inserida com sucesso!");

        } catch (SQLException e) {
            System.err.println("Erro ao inserir recompensa: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // SELECT (getAll)
    public List<Reward> getAll() {
        List<Reward> lista = new ArrayList<>();
        String sql = "SELECT * FROM REWARD";

        try (Connection conn = conectar();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                Reward reward = new Reward(
                        rs.getLong("REWARD_ID"),
                        rs.getString("REWARD_UID"),
                        rs.getString("TITLE"),
                        rs.getString("DESCRIPTION"),
                        rs.getLong("POINTS_REQUIRED"),
                        rs.getInt("IS_ACTIVE") == 1,
                        rs.getTimestamp("CREATED_AT"),
                        rs.getTimestamp("UPDATED_AT"),
                        rs.getInt("IS_OBSOLETE") == 1
                );
                lista.add(reward);
            }

        } catch (SQLException e) {
            System.err.println("Erro ao consultar recompensas: " + e.getMessage());
            e.printStackTrace();
        }

        return lista;
    }
}
