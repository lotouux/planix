package dao;

import model.Pet;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class PetDAO {

    private static final String URL = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL";
    private static final String USER = "RM565050";
    private static final String PASSWORD = "080706";

    public Connection conectar() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    // INSERT
    public void insert(Pet pet) {
        String sql = "INSERT INTO PET (PET_ID, PET_UID, USER_USER_ID, NAME, SPECIES, PET_LEVEL, " +
                "HAPPINESS_SCORE, MOOD, LAST_EVALUATED_AT, CREATED_AT, UPDATED_AT, IS_OBSOLETE) " +
                "VALUES (PET_SEQ.NEXTVAL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = conectar();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, pet.getPetUid());
            ps.setLong(2, pet.getUserUserId());
            ps.setString(3, pet.getName());
            ps.setString(4, pet.getSpecies());
            ps.setInt(5, pet.getPetLevel());
            ps.setDouble(6, pet.getHappinessScore());
            ps.setString(7, pet.getMood());
            ps.setTimestamp(8, pet.getLastEvaluatedAt());
            ps.setTimestamp(9, pet.getCreatedAt());
            ps.setTimestamp(10, pet.getUpdatedAt());
            ps.setInt(11, pet.isObsolete() ? 1 : 0);

            ps.executeUpdate();
            System.out.println("Pet inserido com sucesso!");

        } catch (SQLException e) {
            System.err.println("Erro ao inserir pet: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // SELECT
    public List<Pet> getAll() {
        List<Pet> lista = new ArrayList<>();
        String sql = "SELECT * FROM PET";

        try (Connection conn = conectar();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                Pet pet = new Pet(
                        rs.getLong("PET_ID"),
                        rs.getString("PET_UID"),
                        rs.getLong("USER_USER_ID"),
                        rs.getString("NAME"),
                        rs.getString("SPECIES"),
                        rs.getInt("PET_LEVEL"),
                        rs.getDouble("HAPPINESS_SCORE"),
                        rs.getString("MOOD"),
                        rs.getTimestamp("LAST_EVALUATED_AT"),
                        rs.getTimestamp("CREATED_AT"),
                        rs.getTimestamp("UPDATED_AT"),
                        rs.getInt("IS_OBSOLETE") == 1
                );
                lista.add(pet);
            }

        } catch (SQLException e) {
            System.err.println("Erro ao consultar pets: " + e.getMessage());
            e.printStackTrace();
        }

        return lista;
    }
}
