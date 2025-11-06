package com.fiap.Planix.controller;

import com.fiap.Planix.model.Transaction;
import com.fiap.Planix.service.AnalysisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/analysis")
public class AnalysisController {

    @Autowired
    private AnalysisService analysisService;

    @GetMapping("/user/{userId}/transactions")
    public ResponseEntity<List<Transaction>> getUserTransactions(@PathVariable Long userId) {
        try {
            List<Transaction> transactions = analysisService.getTransactionsByUser(userId);
            return ResponseEntity.ok(transactions);
        } catch (RuntimeException e) {
            return ResponseEntity.ok(List.of());
        }
    }

    @GetMapping("/user/{userId}/total-balance")
    public ResponseEntity<Map<String, BigDecimal>> getTotalBalance(@PathVariable Long userId) {
        try {
            BigDecimal balance = analysisService.calculateTotalBalance(userId);
            if (balance == null) {
                balance = BigDecimal.ZERO;
            }

            return ResponseEntity.ok(Map.of("totalBalance", balance));
        } catch (RuntimeException e) {
            System.err.println("Erro ao calcular saldo (userId: " + userId + "): " + e.getMessage());
            return ResponseEntity.ok(Map.of("totalBalance", BigDecimal.ZERO));
        }
    }

    @GetMapping("/user/{userId}/spending-by-category")
    public ResponseEntity<Map<String, BigDecimal>> getSpendingByCategory(@PathVariable Long userId) {
        try {
            Map<String, BigDecimal> spending = analysisService.getSpendingByCategory(userId);
            return ResponseEntity.ok(spending);
        } catch (RuntimeException e) {
            return ResponseEntity.ok(Map.of());
        }
    }
}