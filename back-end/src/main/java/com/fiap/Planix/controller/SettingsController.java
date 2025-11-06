package com.fiap.Planix.controller;

import com.fiap.Planix.model.User;
import com.fiap.Planix.service.SettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/settings")
public class SettingsController {

    @Autowired
    private SettingsService settingsService;

    @PutMapping("/user/{userId}/preferences")
    public ResponseEntity<User> updatePreferences(@PathVariable Long userId, @RequestBody Map<String, String> request) {
        String preferences = request.get("preferences");
        try {
            User updatedUser = settingsService.updatePreferences(userId, preferences);
            return ResponseEntity.ok(updatedUser);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/notifications/{notificationId}/read")
    public ResponseEntity<Void> markNotificationAsRead(@PathVariable Long notificationId) {
        try {
            settingsService.markNotificationAsRead(notificationId);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/user/{userId}/notifications/read-all")
    public ResponseEntity<Map<String, Integer>> markAllNotificationsAsRead(@PathVariable Long userId) {
        try {
            int count = settingsService.markAllNotificationsAsRead(userId);
            return ResponseEntity.ok(Map.of("markedAsReadCount", count));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/user/{userId}/notifications/unread-count")
    public ResponseEntity<Map<String, Long>> getUnreadNotificationCount(@PathVariable Long userId) {
        try {
            long count = settingsService.getUnreadNotificationCount(userId);
            return ResponseEntity.ok(Map.of("unreadCount", count));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
