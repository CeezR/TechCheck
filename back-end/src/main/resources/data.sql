-- Topics
INSERT INTO "public"."topic" ("topic_name") VALUES ('Topic1');
INSERT INTO "public"."topic" ("topic_name") VALUES ('Topic2');
INSERT INTO "public"."topic" ("topic_name") VALUES ('Topic3');

-- Questions for topics
INSERT INTO "public"."question" ("question", "answer", "topic_id") VALUES ('Question1 for Topic1', 'Answer1', 1);
INSERT INTO "public"."question" ("question", "answer", "topic_id") VALUES ('Question2 for Topic1', 'Answer2', 1);
INSERT INTO "public"."question" ("question", "answer", "topic_id") VALUES ('Question1 for Topic2', 'Answer3', 2);
INSERT INTO "public"."question" ("question", "answer", "topic_id") VALUES ('Question1 for Topic3', 'Answer4', 3);
INSERT INTO "public"."question" ("question", "answer", "topic_id") VALUES ('Question2 for Topic3', 'Answer5', 3);
