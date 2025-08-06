package com.codewiseai.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TestController {

    @GetMapping("/test1")
    public String test1() {
        return "Hello sumanth";
    }
    
    @GetMapping("/health")
    public String health() {
        return "Application is running!";
    }
}
