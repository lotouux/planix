package dao;

import model.PetStatusHistory;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class PetStatusHistoryDAO {

    private static final String URL = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL";
    private static final String USER = "RM565050";
    private static final String PASSWORD = "080706";

    private Connection conectar() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    // INSERT
    public void insert(PetStatusHistory history) {
        String sql = "INSERT INTO PET_STATUS_HISTORY " +
                "(HISTORY_ID, HISTORY_UID, PET_PET_ID, PREVIOUS_MOOD, NEW_MOOD, " +
                "CHANGE_REASON, EVALUATED_AT, CREATED_AT, IS_OBSOLETE) " +
                "VALUES (PET_STATUS_HISTORY_SEQ.NEXTVAL, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = conectar();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, history.getHistoryUid());
            ps.setLong(2, history.getPetPetId());
            ps.setString(3, history.getPreviousMood());
            ps.setString(4, history.getNewMood());
            ps.setString(5, history.getChangeReason());
            ps.setTimestamp(6, history.getEvaluatedAt());
            ps.setTimestamp(7, history.getCreatedAt());
            ps.setInt(8, history.isObsolete() ? 1 : 0);

            ps.executeUpdate();
            System.out.println("Histórico de pet inserido com sucesso!");

        } catch (SQLException e) {
            System.err.println("Erro ao inserir histórico de pet: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // SELECT
    public List<PetStatusHistory> getAll() {
        List<PetStatusHistory> lista = new ArrayList<>();
        String sql = "SELECT * FROM PET_STATUS_HISTORY";

        try (Connection conn = conectar();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                PetStatusHistory history = new PetStatusHistory(
                        rs.getLong("HISTORY_ID"),
                        rs.getString("HISTORY_UID"),
                        rs.getLong("PET_PET_ID"),
                        rs.getString("PREVIOUS_MOOD"),
                        rs.getString("NEW_MOOD"),
                        rs.getString("CHANGE_REASON"),
                        rs.getTimestamp("EVALUATED_AT"),
                        rs.getTimestamp("CREATED_AT"),
                        rs.getInt("IS_OBSOLETE") == 1
                );
                lista.add(history);
            }

        } catch (SQLException e) {
            System.err.println("Erro ao consultar histórico de pets: " + e.getMessage());
            e.printStackTrace();
        }

        return lista;
    }
}
