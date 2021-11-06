package com.devsuperior.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.demo.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}