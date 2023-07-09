package dev.cesar.tech_check.model;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;
import static org.assertj.core.api.Assertions.assertThat;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@ActiveProfiles("test")
class QuestionRepositoryTest {

    @Autowired
    QuestionRepository repository;

    @Test
    void testToCheckThatFindAllReturnAllQuestions() {
        List<Question> questions = repository.findAll();
        assertThat(questions.size()).isEqualTo(5);
    }
}