package com.codewiseai.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.codewiseai.backend"})
public class CodeWiseAiBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(CodeWiseAiBackendApplication.class, args);
    }

}
