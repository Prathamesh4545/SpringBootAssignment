package com.prathamesh.assignment_backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prathamesh.assignment_backend.Repository.ProductRepo;
import com.prathamesh.assignment_backend.model.Category;
import com.prathamesh.assignment_backend.model.Product;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo;

    public Product getProductById(int id) {
        return productRepo.findById(id).orElse(null);
    }

    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    public void addProduct(Product product) {
        productRepo.save(product);
    }

    public void deleteProduct(int id) {
        productRepo.deleteById(id);
    }

    public void updateProduct(int id, Product product) {
        Product existingProduct = productRepo.findById(id).orElse(null);
        if (existingProduct != null) {
            existingProduct.setName(product.getName());
            existingProduct.setDescription(product.getDescription());
            existingProduct.setPrice(product.getPrice());
            existingProduct.setBrand(product.getBrand());
            existingProduct.setCategory(product.getCategory());
            existingProduct.setImageUrl(product.getImageUrl());
            productRepo.save(existingProduct);
        }
    }

    public List<Product> searchProductsByName(String name) {
        return productRepo.findAll().stream()
                .filter(product -> product.getName().toLowerCase().contains(name.toLowerCase()))
                .toList();
    }

    public List<Category> getAllCategories() {
        return productRepo.findAll().stream()
                .map(Product::getCategory)
                .distinct()
                .toList();
    }

}
