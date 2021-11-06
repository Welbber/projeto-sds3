package com.devsuperior.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.demo.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}