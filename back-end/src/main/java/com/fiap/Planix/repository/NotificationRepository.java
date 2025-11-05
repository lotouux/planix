package com.fiap.Planix.repository;

import com.fiap.Planix.model.Notification;
import com.fiap.Planix.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {

    List<Notification> findByUserOrderByTimestampDesc(User user);

    long countByUserAndIsReadFalse(User user);

    @Modifying
    @Query("UPDATE Notification n SET n.isRead = TRUE WHERE n.user = :user AND n.isRead = FALSE")
    int markAllAsReadByUser(User user);
}