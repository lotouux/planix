package com.fiap.Planix.service;

import com.fiap.Planix.model.Goal;
import com.fiap.Planix.model.Transaction;
import com.fiap.Planix.model.User;
import com.fiap.Planix.repository.GoalRepository;
import com.fiap.Planix.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class SearchService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private GoalRepository goalRepository;

    public Map<String, List<?>> unifiedSearch(User user, String query, String type) {
        Map<String, List<?>> results = new HashMap<>();

        if (type == null || "transactions".equalsIgnoreCase(type)) {
            List<Transaction> transactions = transactionRepository.findByUser(user).stream()
                    .filter(t -> query == null || t.getDescription().toLowerCase().contains(query.toLowerCase()))
                    .collect(Collectors.toList());

            results.put("transactions", transactions);
        }

        if (type == null || "goals".equalsIgnoreCase(type)) {
            List<Goal> goals = goalRepository.findByUser(user).stream()
                    .filter(g -> query == null || g.getName().toLowerCase().contains(query.toLowerCase()))
                    .collect(Collectors.toList());

            results.put("goals", goals);
        }

        return results;
    }

    public List<Transaction> filterTransactions(User user, String description, BigDecimal minAmount, OffsetDateTime startDate) {
        return transactionRepository.findByUser(user).stream()
                .filter(t -> description == null || t.getDescription().toLowerCase().contains(description.toLowerCase()))
                .filter(t -> minAmount == null || t.getAmount().compareTo(minAmount) >= 0)
                .filter(t -> startDate == null || t.getDate().isAfter(startDate))
                .collect(Collectors.toList());
    }
}