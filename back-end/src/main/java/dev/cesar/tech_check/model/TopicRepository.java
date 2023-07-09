package dev.cesar.tech_check.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TopicRepository {
    @Autowired
    JPATopicRepository repo;

    public List<Topic> findAll() {
        return Streamable.of(repo.findAll()).toList();
    }

    public List<String> findAllTopicNames() {
        return repo.findAllTopicNames();
    }

    public List<Topic> findByNameIn(List<String> topics) {
        return repo.findByNameIn(topics);
    }
}
