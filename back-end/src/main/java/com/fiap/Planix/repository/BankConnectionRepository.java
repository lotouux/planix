package com.fiap.Planix.repository;

import com.fiap.Planix.model.BankConnection;
import com.fiap.Planix.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BankConnectionRepository extends JpaRepository<BankConnection, Long> {

    List<BankConnection> findByUser(User user);
}
