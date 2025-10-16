package dao;

import model.ChatInteraction;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ChatInteractionDAO {

    private static final String URL = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL";
    private static final String USER = "RM565050";
    private static final String PASSWORD = "080706";

    public Connection conectar() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    // INSERT
    public void insert(ChatInteraction chat) {
        String sql = "INSERT INTO CHAT_INTERACTION (CHAT_ID, CHAT_UID, USER_USER_ID, MESSAGE_TEXT, SENDER_TYPE, MESSAGE_TIMESTAMP, SENTIMENT_SCORE, CONTEXT_META, IS_OBSOLETE) " +
                "VALUES (CHAT_INTERACTION_SEQ.NEXTVAL, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = conectar();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, chat.getChatUid());
            ps.setLong(2, chat.getUserUserId());
            ps.setString(3, chat.getMessageText());
            ps.setString(4, chat.getSenderType());
            ps.setTimestamp(5, chat.getMessageTimestamp());

            if (chat.getSentimentScore() != null) {
                ps.setDouble(6, chat.getSentimentScore());
            } else {
                ps.setNull(6, Types.DOUBLE);
            }

            ps.setString(7, chat.getContextMeta());
            ps.setInt(8, chat.isObsolete() ? 1 : 0);

            ps.executeUpdate();
            System.out.println("Interação de chat inserida com sucesso!");

        } catch (SQLException e) {
            System.err.println("Erro ao inserir chat: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // SELECT
    public List<ChatInteraction> getAll() {
        List<ChatInteraction> lista = new ArrayList<>();
        String sql = "SELECT * FROM CHAT_INTERACTION";

        try (Connection conn = conectar();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                ChatInteraction chat = new ChatInteraction(
                        rs.getLong("CHAT_ID"),
                        rs.getString("CHAT_UID"),
                        rs.getLong("USER_USER_ID"),
                        rs.getString("MESSAGE_TEXT"),
                        rs.getString("SENDER_TYPE"),
                        rs.getTimestamp("MESSAGE_TIMESTAMP"),
                        rs.getObject("SENTIMENT_SCORE") != null ? rs.getDouble("SENTIMENT_SCORE") : null,
                        rs.getString("CONTEXT_META"),
                        rs.getInt("IS_OBSOLETE") == 1
                );
                lista.add(chat);
            }

        } catch (SQLException e) {
            System.err.println("Erro ao consultar chats: " + e.getMessage());
            e.printStackTrace();
        }

        return lista;
    }
}
