package dev.cesar.teck_check;

import org.springframework.data.repository.CrudRepository;

public interface JPAQuestionRepository extends CrudRepository<Question, Long> {
}
