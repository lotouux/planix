package com.fiap.Planix.repository;

import com.fiap.Planix.model.ChatInteraction;
import com.fiap.Planix.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatInteractionRepository extends JpaRepository<ChatInteraction, Long> {

    List<ChatInteraction> findByUser(User user);
    List<ChatInteraction> findBySessionId(String sessionId);
}