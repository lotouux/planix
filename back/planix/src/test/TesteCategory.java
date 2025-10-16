package test;

import dao.CategoryDAO;
import model.Category;

import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

public class TesteCategory {
    public static void main(String[] args) {
        CategoryDAO dao = new CategoryDAO();

        // Inserindo 5 categorias
        for (int i = 1; i <= 5; i++) {
            Category category = new Category(
                    UUID.randomUUID().toString(),  // CATEGORY_UID
                    400 + i,                        // USER_USER_ID
                    500 + i,                        // TRANSACTION_TRANSACTION_ID
                    "Categoria " + i,               // NAME
                    10.0 + i,                       // SUGGESTED_BUDGET_PERCENT
                    new Timestamp(System.currentTimeMillis()), // CREATED_AT
                    null,                            // UPDATED_AT
                    false                            // IS_OBSOLETE
            );

            dao.insert(category);
        }

        // Consultando e exibindo todas as categorias
        List<Category> categories = dao.getAll();
        for (Category category : categories) {
            System.out.println(category);
        }
    }
}
