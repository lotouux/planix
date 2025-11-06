package com.fiap.Planix.service;

import com.fiap.Planix.model.Transaction;
import com.fiap.Planix.model.User;
import com.fiap.Planix.repository.TransactionRepository;
import com.fiap.Planix.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class AnalysisService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Transaction> getTransactionsByUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado com id " + userId));
        return transactionRepository.findByUser(user);
    }

    public BigDecimal calculateTotalBalance(Long userId) {
        List<Transaction> transactions = getTransactionsByUser(userId);
        return transactions.stream()
                .map(Transaction::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    public Map<String, BigDecimal> getSpendingByCategory(Long userId) {
        List<Transaction> transactions = getTransactionsByUser(userId);
        return transactions.stream()
                .filter(t -> "EXPENSE".equalsIgnoreCase(t.getType()))
                .collect(Collectors.groupingBy(
                        t -> t.getCategory() != null ? t.getCategory().getName() : "Sem Categoria",
                        Collectors.reducing(BigDecimal.ZERO, Transaction::getAmount, BigDecimal::add)
                ));
    }
}
