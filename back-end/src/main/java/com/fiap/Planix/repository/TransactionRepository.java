package com.fiap.Planix.repository;

import com.fiap.Planix.model.Transaction;
import com.fiap.Planix.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    List<Transaction> findByUser(User user);
    List<Transaction> findByBankAccountIdBankAccount(Long accountId);
}