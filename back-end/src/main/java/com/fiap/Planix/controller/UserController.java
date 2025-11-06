package com.fiap.Planix.controller;

import com.fiap.Planix.model.User;
import com.fiap.Planix.model.Pet;
import com.fiap.Planix.model.Goal;
import com.fiap.Planix.model.BankConnection;
import com.fiap.Planix.model.Notification;
import com.fiap.Planix.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return userService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        try {
            User updatedUser = userService.update(id, userDetails);
            return ResponseEntity.ok(updatedUser);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}/pets")
    public ResponseEntity<Set<Pet>> getUserPets(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(userService.getUserPets(id));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/goals")
    public ResponseEntity<Set<Goal>> getUserGoals(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(userService.getUserGoals(id));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/bank-connections")
    public ResponseEntity<Set<BankConnection>> getUserBankConnections(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(userService.getUserBankConnections(id));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/notifications")
    public ResponseEntity<List<Notification>> getUserNotifications(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(userService.getUserNotifications(id));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
