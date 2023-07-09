package dev.cesar.tech_check.model.repository;

import dev.cesar.tech_check.model.Topic;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface JPATopicRepository extends CrudRepository<Topic, Long> {
    @Query("SELECT t.name FROM Topic t")
    List<String> findAllTopicNames();

    List<Topic> findByNameIn(List<String> topics);
}
