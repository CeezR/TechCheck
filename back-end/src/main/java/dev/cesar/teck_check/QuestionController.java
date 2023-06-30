package dev.cesar.teck_check;

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
    ResponseEntity<List<Question>> getAllMovies() {
        List<Question> body = repo.findAll();
        return ResponseEntity.ok().body(body);
    }
}
