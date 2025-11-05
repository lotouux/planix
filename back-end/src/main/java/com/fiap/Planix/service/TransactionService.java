package com.fiap.Planix.service;

import com.fiap.Planix.model.BankAccount;
import com.fiap.Planix.model.Transaction;
import com.fiap.Planix.model.User;
import com.fiap.Planix.repository.BankAccountRepository;
import com.fiap.Planix.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private BankAccountRepository bankAccountRepository;

    private void updateAccountBalance(BankAccount account, BigDecimal amount, String type) {
        BigDecimal currentBalance = account.getBalance() != null ? account.getBalance() : BigDecimal.ZERO;

        if ("EXPENSE".equalsIgnoreCase(type)) {
            account.setBalance(currentBalance.subtract(amount));
        } else if ("INCOME".equalsIgnoreCase(type)) {
            account.setBalance(currentBalance.add(amount));
        }
        account.setLastUpdated(OffsetDateTime.now());
        bankAccountRepository.save(account);
    }


    public Transaction saveTransaction(Transaction transaction, User user) {
        if (transaction.getBankAccount() == null || transaction.getBankAccount().getIdBankAccount() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Transação deve estar vinculada a uma conta bancária.");
        }

        Long accountId = transaction.getBankAccount().getIdBankAccount();
        BankAccount account = bankAccountRepository.findById(accountId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Conta bancária não encontrada."));

        transaction.setUser(user);

        OffsetDateTime now = OffsetDateTime.now();
        if (transaction.getIdTransaction() == null) {
            transaction.setCreatedAt(now);
            updateAccountBalance(account, transaction.getAmount(), transaction.getType());
        }

        transaction.setUpdatedAt(now);

        return transactionRepository.save(transaction);
    }

    public List<Transaction> findUserTransactions(User user) {
        return transactionRepository.findByUser(user);
    }

    public Optional<Transaction> findTransactionById(Long id) {
        return transactionRepository.findById(id);
    }


    public Transaction updateTransaction(Long id, Transaction transactionDetails, User user) {
        Transaction existingTransaction = transactionRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Transação não encontrada."));

        if (!existingTransaction.getUser().getIdUser().equals(user.getIdUser())) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Acesso negado. Transação não pertence ao usuário.");
        }

        BankAccount account = existingTransaction.getBankAccount();
        BigDecimal oldAmount = existingTransaction.getAmount();
        String oldType = existingTransaction.getType();

        updateAccountBalance(account, oldAmount, "EXPENSE".equalsIgnoreCase(oldType) ? "INCOME" : "EXPENSE");

        existingTransaction.setAmount(transactionDetails.getAmount());
        existingTransaction.setDescription(transactionDetails.getDescription());
        existingTransaction.setDate(transactionDetails.getDate());
        existingTransaction.setType(transactionDetails.getType());
        existingTransaction.setStatus(transactionDetails.getStatus());
        existingTransaction.setCategory(transactionDetails.getCategory());

        updateAccountBalance(account, existingTransaction.getAmount(), existingTransaction.getType());

        existingTransaction.setUpdatedAt(OffsetDateTime.now());

        return transactionRepository.save(existingTransaction);
    }


    public void deleteTransaction(Long id, User user) {
        Transaction transactionToDelete = transactionRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Transação não encontrada."));

        if (!transactionToDelete.getUser().getIdUser().equals(user.getIdUser())) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Acesso negado.");
        }

        BankAccount account = transactionToDelete.getBankAccount();
        BigDecimal amount = transactionToDelete.getAmount();
        String type = transactionToDelete.getType();

        updateAccountBalance(account, amount, "EXPENSE".equalsIgnoreCase(type) ? "INCOME" : "EXPENSE");

        transactionRepository.delete(transactionToDelete);
    }
}