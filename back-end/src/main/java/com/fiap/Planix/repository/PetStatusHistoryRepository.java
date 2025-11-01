package com.fiap.Planix.repository;

import com.fiap.Planix.model.Pet;
import com.fiap.Planix.model.PetStatusHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PetStatusHistoryRepository extends JpaRepository<PetStatusHistory, Long> {

    List<PetStatusHistory> findByPet(Pet pet);
}