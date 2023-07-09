package dev.cesar.tech_check.model;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class TechCheckContoller {
    private final TechCheckService service;
    public TechCheckContoller(TechCheckService service) {
        this.service = service;
    }

    @GetMapping(path="/questions")
    ResponseEntity<QuestionsDto> getAllQuestions() {
        return ResponseEntity.ok().body(service.findAllQuestions());
    }

    @GetMapping(path="/topics")
    ResponseEntity<TopicNamesDto> getAllTopics() {
        return ResponseEntity.ok().body(service.findAllTopics());
    }

    // TODO New get Mapping with a topicList query returns question of said topics
}
