package dev.cesar.tech_check.model;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@ActiveProfiles("test")
class RepositoryTest {

    @Autowired
    QuestionRepository questionRepository;

    @Autowired
    TopicRepository topicRepository;

    @Test
    void testToCheckThatFindAllReturnAllQuestions() {
        List<Question> questions = questionRepository.findAll();
        assertThat(questions.size()).isEqualTo(4);
    }

    @Test
    void testToCheckThatFindAllTopicsReturnsAllTopics() {
        List<Topic> topics = topicRepository.findAll();
        assertThat(topics.size()).isEqualTo(4);
    }
}