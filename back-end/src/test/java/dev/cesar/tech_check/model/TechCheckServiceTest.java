package dev.cesar.tech_check.model;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@ActiveProfiles("test")
class TechCheckServiceTest {

    @Autowired
    TechCheckService service;

    @Test
    void testToCheckFindAllTopicsReturnListOfTopicNames() {
        TopicsDto allTopics = service.findAllTopics();
        assertThat(allTopics).isNotNull();
        assertThat(allTopics.topics()).contains("Science");
        assertThat(allTopics.topics().size()).isEqualTo(4);
    }

}