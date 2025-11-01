package com.fiap.Planix.repository;

import com.fiap.Planix.model.AuditLog;
import com.fiap.Planix.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuditLogRepository extends JpaRepository<AuditLog, Long> {

    List<AuditLog> findByUser(User user);
}