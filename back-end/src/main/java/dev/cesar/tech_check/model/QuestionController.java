package dev.cesar.tech_check.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/questions")
@CrossOrigin(origins = "*")
public class QuestionController {

    @Autowired
    QuestionRepository repo;

    @GetMapping
    ResponseEntity<QuestionsDto> getAllMovies() {
        return ResponseEntity.ok().body(new QuestionsDto(repo.findAll()));
    }
}
