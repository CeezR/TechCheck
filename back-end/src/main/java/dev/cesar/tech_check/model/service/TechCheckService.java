package dev.cesar.tech_check.model.service;

import dev.cesar.tech_check.model.*;
import dev.cesar.tech_check.model.repository.TopicRepository;
import dev.cesar.tech_check.model.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

    public List<Question> findAllQuestions() {
        return questionRepository.findAll();
    }

    public QuestionListDto findAllQuestionsOfTopic(List<String> topics) {
        List<QuestionDto> list = new ArrayList<>();
        topicRepository.findByNameIn(topics).forEach(topic -> {
            topic.getQuestions().stream().forEach((question -> {
                list.add(new QuestionDto(topic.getName(), question.getQuestion(), question.getAnswer()));
            }));
        });
        return new QuestionListDto(list);
    }
}
