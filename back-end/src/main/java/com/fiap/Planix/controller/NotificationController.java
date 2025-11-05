package com.fiap.Planix.controller;

import com.fiap.Planix.model.Notification;
import com.fiap.Planix.model.User;
import com.fiap.Planix.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications/")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    private User getCurrentUser() {
        User mockUser = new User();
        mockUser.setIdUser(1L);
        return mockUser;
    }

    @GetMapping
    public List<Notification> getNotifications() {
        User user = getCurrentUser();
        return notificationService.findUserNotifications(user);
    }

    @GetMapping("unread/count")
    public long getUnreadCount() {
        User user = getCurrentUser();
        return notificationService.countUnreadNotifications(user);
    }

    @PutMapping("/{id}/read")
    public Notification markOneAsRead(@PathVariable Long id) {
        User user = getCurrentUser();
        return notificationService.markAsRead(id, user);
    }

    @PutMapping("read-all")
    public String markAllAsRead() {
        User user = getCurrentUser();
        int count = notificationService.markAllAsRead(user);
        return count + " notificações marcadas como lidas.";
    }

    @PostMapping("test")
    @ResponseStatus(HttpStatus.CREATED)
    public Notification createTestNotification(
            @RequestParam String message,
            @RequestParam String icon,
            @RequestParam(required = false) String link) {

        User user = getCurrentUser();
        return notificationService.createNotification(user, message, icon, link);
    }
}