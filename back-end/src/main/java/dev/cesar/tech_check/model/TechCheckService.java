package dev.cesar.tech_check.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TechCheckService {

    private final QuestionRepository questionRepository;
    private final TopicRepository topicRepository;

    @Autowired
    public TechCheckService(QuestionRepository questionRepository, TopicRepository topicRepository) {
        this.questionRepository = questionRepository;
        this.topicRepository = topicRepository;
    }

    public TopicsDto findAllTopics() {
        return new TopicsDto(topicRepository.findAllTopicNames());
    }

    public QuestionsDto findAllQuestions() {
        return new QuestionsDto(questionRepository.findAll());
    }
}
