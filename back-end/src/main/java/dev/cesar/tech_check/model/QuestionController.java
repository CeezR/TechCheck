package dev.cesar.tech_check.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class QuestionController {

    @Autowired
    QuestionRepository questionRepository;

    @Autowired
    TopicRepository topicRepository;

    @GetMapping(path="/questions")
    ResponseEntity<QuestionsDto> getAllQuestions() {
        return ResponseEntity.ok().body(new QuestionsDto(questionRepository.findAll()));
    }

    @GetMapping(path="/topics")
    ResponseEntity<TopicsDto> getAllTopics() {
        return ResponseEntity.ok().body(new TopicsDto(topicRepository.findAll()));
    }

    // TODO New get Mapping with a topicList query returns question of said topics
}
