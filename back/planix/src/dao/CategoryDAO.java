package dao;

import model.Category;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class CategoryDAO {

    private static final String URL = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL";
    private static final String USER = "RM565050";
    private static final String PASSWORD = "080706";

    public Connection conectar() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    // INSERT
    public void insert(Category category) {
        String sql = "INSERT INTO CATEGORY (CATEGORY_ID, CATEGORY_UID, USER_USER_ID, TRANSACTION_TRANSACTION_ID, NAME, SUGGESTED_BUDGET_PERCENT, CREATED_AT, UPDATED_AT, IS_OBSOLETE) " +
                "VALUES (CATEGORY_SEQ.NEXTVAL, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = conectar();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, category.getCategoryUid());
            ps.setLong(2, category.getUserUserId());
            ps.setLong(3, category.getTransactionTransactionId());
            ps.setString(4, category.getName());
            if (category.getSuggestedBudgetPercent() != null) {
                ps.setDouble(5, category.getSuggestedBudgetPercent());
            } else {
                ps.setNull(5, Types.DOUBLE);
            }
            ps.setTimestamp(6, category.getCreatedAt());
            ps.setTimestamp(7, category.getUpdatedAt());
            ps.setInt(8, category.isObsolete() ? 1 : 0);

            ps.executeUpdate();
            System.out.println("Categoria inserida com sucesso!");

        } catch (SQLException e) {
            System.err.println("Erro ao inserir categoria: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // SELECT
    public List<Category> getAll() {
        List<Category> lista = new ArrayList<>();
        String sql = "SELECT * FROM CATEGORY";

        try (Connection conn = conectar();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                Category category = new Category(
                        rs.getLong("CATEGORY_ID"),
                        rs.getString("CATEGORY_UID"),
                        rs.getLong("USER_USER_ID"),
                        rs.getLong("TRANSACTION_TRANSACTION_ID"),
                        rs.getString("NAME"),
                        rs.getObject("SUGGESTED_BUDGET_PERCENT") != null ? rs.getDouble("SUGGESTED_BUDGET_PERCENT") : null,
                        rs.getTimestamp("CREATED_AT"),
                        rs.getTimestamp("UPDATED_AT"),
                        rs.getInt("IS_OBSOLETE") == 1
                );
                lista.add(category);
            }

        } catch (SQLException e) {
            System.err.println("Erro ao consultar categorias: " + e.getMessage());
            e.printStackTrace();
        }

        return lista;
    }
}
