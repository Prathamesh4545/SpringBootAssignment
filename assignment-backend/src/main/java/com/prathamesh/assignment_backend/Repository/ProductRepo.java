package com.prathamesh.assignment_backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.prathamesh.assignment_backend.model.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Integer> { 

}
