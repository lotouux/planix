package com.fiap.Planix.controller;

import com.fiap.Planix.model.Transaction;
import com.fiap.Planix.model.User;
import com.fiap.Planix.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;

@RestController
@RequestMapping("/api/transactions/")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    private User getCurrentUser() {
        User mockUser = new User();
        mockUser.setIdUser(1L);
        return mockUser;
    }

    @GetMapping
    public List<Transaction> listTransactions() {
        User user = getCurrentUser();
        return transactionService.findUserTransactions(user);
    }

    @GetMapping("/{id}")
    public Transaction getTransactionById(@PathVariable Long id) {
        return transactionService.findTransactionById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Transação não encontrada."));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Transaction createTransaction(@RequestBody Transaction transaction) {
        User user = getCurrentUser();
        return transactionService.saveTransaction(transaction, user);
    }

    @PutMapping("/{id}")
    public Transaction updateTransaction(@PathVariable Long id, @RequestBody Transaction transactionDetails) {
        User user = getCurrentUser();
        return transactionService.updateTransaction(id, transactionDetails, user);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTransaction(@PathVariable Long id) {
        User user = getCurrentUser();
        transactionService.deleteTransaction(id, user);
    }
}