package dev.cesar.tech_check.model.repository;

import dev.cesar.tech_check.model.Question;
import org.springframework.data.repository.CrudRepository;

public interface JPAQuestionRepository extends CrudRepository<Question, Long> {
}
