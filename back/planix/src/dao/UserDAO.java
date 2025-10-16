package dao;

import model.User;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UserDAO {

    private static final String URL = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL";
    private static final String USER = "RM565050";
    private static final String PASSWORD = "080706";

    public Connection conectar() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    // INSERT
    public void insert(User user) {
        String sql = "INSERT INTO USER_TABLE (USER_ID, USER_UID, EMAIL, FULL_NAME, PHONE, BIRTH_DATE, " +
                "COUNTRY_CURRENCY, LOCALE, STATUS, PREFERENCES, CREATED_AT, UPDATED_AT, IS_OBSOLETE) " +
                "VALUES (USER_SEQ.NEXTVAL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = conectar();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, user.getUserUid());
            ps.setString(2, user.getEmail());
            ps.setString(3, user.getFullName());
            ps.setString(4, user.getPhone());
            ps.setDate(5, user.getBirthDate());
            ps.setString(6, user.getCountryCurrency());
            ps.setString(7, user.getLocale());
            ps.setString(8, user.getStatus());
            ps.setString(9, user.getPreferences());
            ps.setTimestamp(10, user.getCreatedAt());
            ps.setTimestamp(11, user.getUpdatedAt());
            ps.setInt(12, user.isObsolete() ? 1 : 0);

            ps.executeUpdate();
            System.out.println("Usuário inserido com sucesso!");

        } catch (SQLException e) {
            System.err.println("Erro ao inserir usuário: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // SELECT (getAll)
    public List<User> getAll() {
        List<User> lista = new ArrayList<>();
        String sql = "SELECT * FROM USER_TABLE";

        try (Connection conn = conectar();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                User user = new User(
                        rs.getLong("USER_ID"),
                        rs.getString("USER_UID"),
                        rs.getString("EMAIL"),
                        rs.getString("FULL_NAME"),
                        rs.getString("PHONE"),
                        rs.getDate("BIRTH_DATE"),
                        rs.getString("COUNTRY_CURRENCY"),
                        rs.getString("LOCALE"),
                        rs.getString("STATUS"),
                        rs.getString("PREFERENCES"),
                        rs.getTimestamp("CREATED_AT"),
                        rs.getTimestamp("UPDATED_AT"),
                        rs.getInt("IS_OBSOLETE") == 1
                );
                lista.add(user);
            }

        } catch (SQLException e) {
            System.err.println("Erro ao consultar usuários: " + e.getMessage());
            e.printStackTrace();
        }

        return lista;
    }
}
