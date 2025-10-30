package com.fiap.Planix.repository;

import com.fiap.Planix.model.BankAccount;
import com.fiap.Planix.model.BankConnection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BankAccountRepository extends JpaRepository<BankAccount, Long> {

    List<BankAccount> findByBankConnection(BankConnection connection);
}