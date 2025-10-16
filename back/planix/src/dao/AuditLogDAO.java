package dao;

import model.AuditLog;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class AuditLogDAO {

    private static final String URL = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL";
    private static final String USER = "RM565050";
    private static final String PASSWORD = "080706";

    public Connection conectar() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    // INSERT
    public void insert(AuditLog log) {
        String sql = "INSERT INTO AUDIT_LOG (AUDIT_ID, AUDIT_UID, USER_USER_ID, ACTION_TYPE, TARGET_TABLE, TARGET_ID, ACTION_TIMESTAMP, DETAILS, IP_ADDRESS, USER_AGENT, IS_OBSOLETE) " +
                "VALUES (AUDIT_LOG_SEQ.NEXTVAL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = conectar();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, log.getAuditUid());
            ps.setLong(2, log.getUserUserId());
            ps.setString(3, log.getActionType());
            ps.setString(4, log.getTargetTable());
            ps.setString(5, log.getTargetId());
            ps.setTimestamp(6, log.getActionTimestamp());
            ps.setString(7, log.getDetails());
            ps.setString(8, log.getIpAddress());
            ps.setString(9, log.getUserAgent());
            ps.setInt(10, log.isObsolete() ? 1 : 0);

            ps.executeUpdate();
            System.out.println("Registro inserido com sucesso!");

        } catch (SQLException e) {
            System.err.println("Erro ao inserir registro: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // SELECT (getAll)
    public List<AuditLog> getAll() {
        List<AuditLog> lista = new ArrayList<>();
        String sql = "SELECT * FROM AUDIT_LOG";

        try (Connection conn = conectar();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                AuditLog log = new AuditLog(
                        rs.getLong("AUDIT_ID"),
                        rs.getString("AUDIT_UID"),
                        rs.getLong("USER_USER_ID"),
                        rs.getString("ACTION_TYPE"),
                        rs.getString("TARGET_TABLE"),
                        rs.getString("TARGET_ID"),
                        rs.getTimestamp("ACTION_TIMESTAMP"),
                        rs.getString("DETAILS"),
                        rs.getString("IP_ADDRESS"),
                        rs.getString("USER_AGENT"),
                        rs.getInt("IS_OBSOLETE") == 1
                );
                lista.add(log);
            }

        } catch (SQLException e) {
            System.err.println("Erro ao consultar registros: " + e.getMessage());
            e.printStackTrace();
        }

        return lista;
    }
}
