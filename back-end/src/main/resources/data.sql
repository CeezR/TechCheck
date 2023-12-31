INSERT INTO public.topic(topic_name) VALUES ('Java & OOP');
INSERT INTO public.question(question_text, answer, topic_id) VALUES ('What is the concept of polymorphism in Java, and why is it important?	', 'Polymorphism in Java is a concept by which we can perform a single action in different ways. It''s important because it allows us to design methods that don''t need to know the exact type of objects that they are dealing with.', 1);

INSERT INTO public.topic(topic_name) VALUES ('Advanced Java');
INSERT INTO public.question(question_text, answer, topic_id) VALUES ('Can you explain the difference between checked and unchecked exceptions in Java?', 'Checked exceptions are exceptions that need to be declared in a method or constructor''s throws clause if they can be thrown by the execution of the method or constructor and propagate outside the method or constructor''s throws clause. Unchecked exceptions are exceptions that do not need to be declared in a method or constructor''s throws clause. They can occur at any point in your code and are generally due to programming errors, like null pointer exceptions or array index out of bounds exceptions.', 2);

INSERT INTO public.topic(topic_name) VALUES ('HTML, CSS & JS');
INSERT INTO public.question(question_text, answer, topic_id) VALUES ('How does the box model work in CSS, and why is it important?', 'The CSS box model describes the rectangular boxes that are generated for elements in the document tree and determines how elements are sized and positioned on the web page. It includes the content, padding, border, and margin areas. It''s important because it allows us to create layouts with spaces between elements, and it''s a fundamental concept for controlling how elements interact with each other on the page.', 3);

INSERT INTO public.topic(topic_name) VALUES ('API');
INSERT INTO public.question(question_text, answer, topic_id) VALUES ('What is a RESTful API, and how does it work?', 'A RESTful API (Representational State Transfer) is an architectural style for an application program interface (API) that uses HTTP requests to access and use data. It works by defining a set of functions which developers can perform requests and receive responses via HTTP protocol such as GET, POST, PUT and DELETE.', 4);

INSERT INTO public.topic(topic_name) VALUES ('TypeScript');
INSERT INTO public.question(question_text, answer, topic_id) VALUES ('How does TypeScript enhance JavaScript development?', 'A RESTful API (Representational State Transfer) is an architectural style for an application program interface (API) that uses HTTP requests to access and use data. It works by defining a set of functions which developers can perform requests and receive responses via HTTP protocol such as GET, POST, PUT and DELETE.', 5);

INSERT INTO public.topic(topic_name) VALUES ('React');
INSERT INTO public.question(question_text, answer, topic_id) VALUES ('What is the significance of the virtual DOM in React?', 'The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation. This approach leads to a considerable increase in performance because it avoids direct manipulation of the DOM, which is slower than operations in JavaScript objects.', 6);

INSERT INTO public.topic(topic_name) VALUES ('JPA');
INSERT INTO public.question(question_text, answer, topic_id) VALUES ('What is JPA and why is it used in Java development?', 'The Java Persistence API (JPA) is a specification of Java. It is used to persist data between Java object and relational database. JPA acts as a bridge between object-oriented domain models and relational database systems. As it is a specification, it does not perform any operation by itself. It requires an implementation. Therefore, ORM tools like Hibernate, TopLink, and iBatis implements JPA specifications for data persistence.', 7);

INSERT INTO public.topic(topic_name) VALUES ('Cloud and Azure');
INSERT INTO public.question(question_text, answer, topic_id) VALUES ('What are the benefits of using a cloud platform like Azure?', 'Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers. Some benefits of using Azure include scalability, flexibility, cost-effectiveness, and security. It allows businesses to scale up or down to match demand, only pay for what they use, and leverage Microsoft’s investments in security.', 8);
