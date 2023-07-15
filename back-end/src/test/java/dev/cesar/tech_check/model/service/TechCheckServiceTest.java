package dev.cesar.tech_check.model.service;

import dev.cesar.tech_check.model.QuestionListDto;
import dev.cesar.tech_check.model.TopicNamesDto;
import dev.cesar.tech_check.model.service.TechCheckService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@ActiveProfiles("test")
class TechCheckServiceTest {

    @Autowired
    TechCheckService service;

    @Test
    void testToCheckFindAllTopicsReturnListOfTopicNames() {
        TopicNamesDto allTopics = service.findAllTopics();
        assertThat(allTopics).isNotNull();
        assertThat(allTopics.topics()).contains("Java & OOP");
        assertThat(allTopics.topics().size()).isEqualTo(8);
    }

    @Test
    void GetAllQuestionsByTopicReturnsCorrectValues() {
        QuestionListDto questionList = service.findAllQuestionsOfTopic(List.of("Java & OOP", "Advanced Java"));
        assertThat(questionList.questions()).isNotNull();
    }

}