package test;

import dao.UserDAO;
import model.User;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

public class TesteUser {
    public static void main(String[] args) {
        UserDAO dao = new UserDAO();

        // Inserindo 3 usuários de exemplo
        for (int i = 1; i <= 3; i++) {
            User user = new User(
                    UUID.randomUUID().toString(),
                    "usuario" + i + "@email.com",
                    "Usuário Teste " + i,
                    "1199999000" + i,
                    Date.valueOf("199" + i + "-01-01"),
                    "BRL",
                    "pt-BR",
                    "ACTIVE",
                    "{\"theme\": \"dark\"}",  // Exemplo de CLOB JSON
                    new Timestamp(System.currentTimeMillis()),
                    new Timestamp(System.currentTimeMillis()),
                    false
            );

            dao.insert(user);
        }

        // Consultando e exibindo todos os usuários
        List<User> users = dao.getAll();
        for (User u : users) {
            System.out.println(u);
        }
    }
}
