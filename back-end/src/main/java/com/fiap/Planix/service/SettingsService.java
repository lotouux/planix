package com.fiap.Planix.service;

import com.fiap.Planix.model.User;
import com.fiap.Planix.model.Notification;
import com.fiap.Planix.repository.UserRepository;
import com.fiap.Planix.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class SettingsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private NotificationRepository notificationRepository;

    @Transactional
    public User updatePreferences(Long userId, String newPreferences) {
        return userRepository.findById(userId).map(user -> {
            user.setPreferences(newPreferences);
            return userRepository.save(user);
        }).orElseThrow(() -> new RuntimeException("Usuário não encontrado com id " + userId));
    }

    @Transactional
    public void markNotificationAsRead(Long notificationId) {
        Notification notification = notificationRepository.findById(notificationId)
                .orElseThrow(() -> new RuntimeException("Notificação não encontrada com id " + notificationId));
        notification.setIsRead(true);
        notificationRepository.save(notification);
    }

    @Transactional
    public int markAllNotificationsAsRead(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado com id " + userId));
        return notificationRepository.markAllAsReadByUser(user);
    }

    public long getUnreadNotificationCount(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado com id " + userId));
        return notificationRepository.countByUserAndIsReadFalse(user);
    }
}
