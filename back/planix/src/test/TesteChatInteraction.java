package test;

import dao.ChatInteractionDAO;
import model.ChatInteraction;

import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

public class TesteChatInteraction {
    public static void main(String[] args) {
        ChatInteractionDAO dao = new ChatInteractionDAO();

        // Inserindo 5 interações
        for (int i = 1; i <= 5; i++) {
            ChatInteraction chat = new ChatInteraction(
                    UUID.randomUUID().toString(), // CHAT_UID
                    600 + i,                       // USER_USER_ID
                    "Mensagem teste " + i,         // MESSAGE_TEXT
                    "USER",                        // SENDER_TYPE
                    new Timestamp(System.currentTimeMillis()), // MESSAGE_TIMESTAMP
                    0.5 + i,                        // SENTIMENT_SCORE
                    "{\"context\": \"meta " + i + "\"}", // CONTEXT_META
                    false                           // IS_OBSOLETE
            );

            dao.insert(chat);
        }

        // Consultando e exibindo todas as interações
        List<ChatInteraction> chats = dao.getAll();
        for (ChatInteraction chat : chats) {
            System.out.println(chat);
        }
    }
}
