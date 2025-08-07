package com.codewiseai.backend.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "users")
public class User {
    
    @Id
    private String id;
    
    private String username;
    private String email;
    private String githubId;
    private String role; // ADMIN, REVIEWER, DEVELOPER
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    
    public User() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }
    
    public User(String username, String email) {
        this();
        this.username = username;
        this.email = email;
        this.role = "DEVELOPER";
    }
}
