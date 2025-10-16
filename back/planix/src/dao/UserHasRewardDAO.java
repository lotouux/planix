package dao;

import model.UserHasReward;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UserHasRewardDAO {

    private static final String URL = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL";
    private static final String USER = "RM565050";
    private static final String PASSWORD = "080706";

    public Connection conectar() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    // INSERT
    public void insert(UserHasReward relation) {
        String sql = "INSERT INTO USER_HAS_REWARD (REWARD_REWARD_ID, USER_USER_ID) VALUES (?, ?)";

        try (Connection conn = conectar();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setLong(1, relation.getRewardRewardId());
            ps.setLong(2, relation.getUserUserId());

            ps.executeUpdate();
            System.out.println("Relação inserida com sucesso!");

        } catch (SQLException e) {
            System.err.println("Erro ao inserir relação: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // SELECT (getAll)
    public List<UserHasReward> getAll() {
        List<UserHasReward> lista = new ArrayList<>();
        String sql = "SELECT * FROM USER_HAS_REWARD";

        try (Connection conn = conectar();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                UserHasReward relation = new UserHasReward(
                        rs.getLong("REWARD_REWARD_ID"),
                        rs.getLong("USER_USER_ID")
                );
                lista.add(relation);
            }

        } catch (SQLException e) {
            System.err.println("Erro ao consultar relações: " + e.getMessage());
            e.printStackTrace();
        }

        return lista;
    }
}
