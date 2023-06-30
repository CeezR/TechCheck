package dev.cesar.teck_check;

import jakarta.persistence.*;

@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "question", nullable = false)
    String question;

    @Column(name = "answer", nullable = false)
    String answer;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
