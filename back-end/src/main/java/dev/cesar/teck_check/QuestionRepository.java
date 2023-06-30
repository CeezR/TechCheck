package dev.cesar.teck_check;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class QuestionRepository {
    @Autowired
    JPAQuestionRepository repo;

    public List<Question> findAll() {
        return Streamable.of(repo.findAll()).toList();
    }
}
