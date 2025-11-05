package com.fiap.Planix.service;

import com.fiap.Planix.model.Notification;
import com.fiap.Planix.model.User;
import com.fiap.Planix.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    public List<Notification> findUserNotifications(User user) {
        return notificationRepository.findByUserOrderByTimestampDesc(user);
    }

    public long countUnreadNotifications(User user) {
        return notificationRepository.countByUserAndIsReadFalse(user);
    }

    public Notification createNotification(User user, String message, String icon, String link) {
        Notification notification = new Notification();
        notification.setUser(user);
        notification.setMessage(message);
        notification.setIconName(icon);
        notification.setLinkUrl(link);
        notification.setIsRead(false);
        notification.setTimestamp(java.time.OffsetDateTime.now());

        return notificationRepository.save(notification);
    }

    public Notification markAsRead(Long notificationId, User user) {
        Notification notification = notificationRepository.findById(notificationId)
                .filter(n -> n.getUser().getIdUser().equals(user.getIdUser()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Notificação não encontrada ou acesso negado."));

        if (!notification.getIsRead()) {
            notification.setIsRead(true);
            return notificationRepository.save(notification);
        }
        return notification;
    }

    public int markAllAsRead(User user) {
        return notificationRepository.markAllAsReadByUser(user);
    }
}