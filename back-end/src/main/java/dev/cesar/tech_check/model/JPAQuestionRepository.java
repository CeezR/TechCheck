package dev.cesar.tech_check.model;

import org.springframework.data.repository.CrudRepository;

public interface JPAQuestionRepository extends CrudRepository<Question, Long> {
}
