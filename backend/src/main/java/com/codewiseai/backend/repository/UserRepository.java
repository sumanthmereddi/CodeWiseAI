package com.codewiseai.backend.repository;

import com.codewiseai.backend.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    
    Optional<User> findByEmail(String email);
    Optional<User> findByGithubId(String githubId);
    Optional<User> findByUsername(String username);
}
