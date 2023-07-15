package dev.cesar.tech_check.model.controller;

import dev.cesar.tech_check.model.QuestionListDto;
import dev.cesar.tech_check.model.service.TechCheckService;
import dev.cesar.tech_check.model.TopicNamesDto;
import dev.cesar.tech_check.model.TopicsDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class TechCheckContoller {
    private final TechCheckService service;
    public TechCheckContoller(TechCheckService service) {
        this.service = service;
    }

    @GetMapping(path="/topics/bynames")
    public ResponseEntity<QuestionListDto> getTopics(@RequestParam String topics) {
        List<String> topicList = Arrays.asList(topics.split(";;"));
        return ResponseEntity.ok().body(service.findAllQuestionsOfTopic(topicList));
    }

    @GetMapping(path="/topics")
    ResponseEntity<TopicNamesDto> getAllTopics() {
        return ResponseEntity.ok().body(service.findAllTopics());
    }

    // TODO New get Mapping with a topicList query returns question of said topics
}
