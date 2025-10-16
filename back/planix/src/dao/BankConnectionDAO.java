package dao;

import model.BankConnection;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class BankConnectionDAO {

    private static final String URL = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL";
    private static final String USER = "RM565050";
    private static final String PASSWORD = "080706";

    public Connection conectar() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    // INSERT
    public void insert(BankConnection connection) {
        String sql = "INSERT INTO BANK_CONNECTION (CONNECTION_ID, CONNECTION_UID, USER_USER_ID, PROVIDER_NAME, CONNECTION_STATUS, LAST_SYNC_AT, TOKEN_META, CREATED_AT, UPDATED_AT, IS_OBSOLETE) " +
                "VALUES (BANK_CONNECTION_SEQ.NEXTVAL, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = conectar();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, connection.getConnectionUid());
            ps.setLong(2, connection.getUserUserId());
            ps.setString(3, connection.getProviderName());
            ps.setString(4, connection.getConnectionStatus());
            ps.setTimestamp(5, connection.getLastSyncAt());
            ps.setString(6, connection.getTokenMeta());
            ps.setTimestamp(7, connection.getCreatedAt());
            ps.setTimestamp(8, connection.getUpdatedAt());
            ps.setInt(9, connection.isObsolete() ? 1 : 0);

            ps.executeUpdate();
            System.out.println("Conexão bancária inserida com sucesso!");

        } catch (SQLException e) {
            System.err.println("Erro ao inserir conexão: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // SELECT
    public List<BankConnection> getAll() {
        List<BankConnection> lista = new ArrayList<>();
        String sql = "SELECT * FROM BANK_CONNECTION";

        try (Connection conn = conectar();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                BankConnection connection = new BankConnection(
                        rs.getLong("CONNECTION_ID"),
                        rs.getString("CONNECTION_UID"),
                        rs.getLong("USER_USER_ID"),
                        rs.getString("PROVIDER_NAME"),
                        rs.getString("CONNECTION_STATUS"),
                        rs.getTimestamp("LAST_SYNC_AT"),
                        rs.getString("TOKEN_META"),
                        rs.getTimestamp("CREATED_AT"),
                        rs.getTimestamp("UPDATED_AT"),
                        rs.getInt("IS_OBSOLETE") == 1
                );
                lista.add(connection);
            }

        } catch (SQLException e) {
            System.err.println("Erro ao consultar conexões: " + e.getMessage());
            e.printStackTrace();
        }

        return lista;
    }
}
