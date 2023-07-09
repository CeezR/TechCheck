package dev.cesar.tech_check.model;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.web.client.RestTemplate;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@ActiveProfiles("test")
class ControllerTest {

    @Value("${server.port}")
    private int port;

    @Autowired
    RestTemplate restTemplate;

    @Test
    void TestGetQuestionMappingReturnsListOfQuestions() {
        String uri = "http://localhost:%s/api/questions".formatted(port);
        ResponseEntity<QuestionsDto> exchange = restTemplate.exchange(uri, HttpMethod.GET, HttpEntity.EMPTY, QuestionsDto.class);
        assertThat(exchange.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(exchange.getBody().questions()).isNotNull();
        assertThat(exchange.getBody().questions().size()).isEqualTo(4);
    }

    @Test
    void TestGetTopicsMappingReturnsListOfTopics() {
        String uri = "http://localhost:%s/api/topics".formatted(port);
        ResponseEntity<TopicNamesDto> exchange = restTemplate.exchange(uri, HttpMethod.GET, HttpEntity.EMPTY, TopicNamesDto.class);
        assertThat(exchange.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(exchange.getBody().topics()).isNotNull();
        assertThat(exchange.getBody().topics().size()).isEqualTo(4);
    }

    @Test
    void testGetTopicsMappingReturnsListOfTopics() {
        String uri = "http://localhost:%s/api/topics/bynames?topics=Science,History".formatted(port);
        ResponseEntity<TopicsDto> exchange = restTemplate.exchange(uri, HttpMethod.GET, HttpEntity.EMPTY, TopicsDto.class);

        assertThat(exchange.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(exchange.getBody()).isNotNull();
        assertThat(exchange.getBody().topics()).isNotNull();
        assertThat(exchange.getBody().topics().size()).isEqualTo(2);
    }


}