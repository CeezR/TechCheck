package dev.cesar.tech_check.model.service;

import dev.cesar.tech_check.model.QuestionListDto;
import dev.cesar.tech_check.model.TopicNamesDto;
import dev.cesar.tech_check.model.repository.TopicRepository;
import dev.cesar.tech_check.model.TopicsDto;
import dev.cesar.tech_check.model.repository.QuestionRepository;
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

    public TopicNamesDto findAllTopics() {
        return new TopicNamesDto(topicRepository.findAllTopicNames());
    }

    public QuestionListDto findAllQuestions() {
        return new QuestionListDto(questionRepository.findAll());
    }

    public TopicsDto findAllQuestionsOfTopic(List<String> topics) {
        return new TopicsDto(topicRepository.findByNameIn(topics));
    }
}
