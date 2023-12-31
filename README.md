# TechCheck
A fullstack application build for practising technical interview questions. 

### 🎓 Learning Objectives
This project serves as a learning exercise to gain proficiency in the following areas:
- Full development life cycle
- Deploy Back-end to Azure
- Deploy Front-end to Vercel

### Table of Contents
- [📱 Tech Stack](#-tech-stack)
- [🛠 Project Dependencies](#-project-dependencies)
- [🚀 Getting Started / Installation](#-getting-started--installation)
- [🔌 Usage](#-usage)
- [🪩 Feature List](#-feature-list)
- [🏛️ Project Structure](#%EF%B8%8F-project-structure)
- [🚧 Known Issues and Limitations](#-known-issues-and-limitations)
- [🧭 Contributing Guidelines](#-contributing-guidelines)
- [🌟 Project Reflection](#-project-reflection)

### 📱 Tech Stack
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Spring](https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Apache Maven](https://img.shields.io/badge/apache_maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white)

### 🛠 Project Dependencies

#### Back-End

| Dependency | Description |
|------------|-------------|
| ![Java](https://img.shields.io/badge/Java-17-orange.svg) | [Java](https://www.java.com/en/), built using Java 17|
| ![Maven](https://img.shields.io/badge/Maven-4.0.0-blue.svg) | [Maven](https://maven.apache.org/) is used for managing the project's build, report, and documentation from a central piece of information. |
| ![Spring Boot](https://img.shields.io/badge/Spring_Boot-2.7.0-brightgreen.svg) | [Spring Boot](https://spring.io/projects/spring-boot) provides a platform for Java developers to develop stand-alone, production-grade Spring applications that you can just run. |
| ![Hibernate](https://img.shields.io/badge/Hibernate-2.15.2-green.svg) | [Hibernate](https://hibernate.org/) is a robust Object/Relational Mapping tool for Java. |
| ![JUnit](https://img.shields.io/badge/JUnit-5.9.3-orange.svg) | [JUnit](https://junit.org/) is a simple and powerful testing framework for Java. |

#### Front-End

| Dependency | Description |
|------------|-------------|
| ![React](https://img.shields.io/badge/React-18.0.37-61DAFB.svg) | [React](https://reactjs.org/) is a JavaScript library for building user interfaces. |
| ![Vite](https://img.shields.io/badge/Vite-4.3.9-646CFF.svg) | [Vite](https://vitejs.dev/) is a build tool that aims to provide a faster and leaner development experience for modern web projects. |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-3178C6.svg) | [TypeScript](https://www.typescriptlang.org/) is a typed superset of JavaScript that compiles to plain JavaScript. |

#### Database
| Dependency | Description |
|------------|-------------|
| ![H2 Database](https://img.shields.io/badge/H2_Database-2.2.220-blue.svg) | [H2](https://www.h2database.com/html/main.html) is a fast in-memory database that supports JDBC API and R2DBC access, with a small (2mb) footprint. |

Please refer to the `pom.xml` file and the `package.json` file for a complete list of dependencies.

### 🚀 Getting Started / Installation
Follow these steps to get the application up and running in your local environment:

1. Clone the repo
``` git clone https://github.com/CeezR/TechCheck ```

| Steps                            | Front-end                 | Back-end                  |
| ---------------------------------| ------------------------- | ------------------------- |
| 2. Navigate into repo            | `cd front-end`            | `cd back-end`             |
| 3. Install Dependencies          | `npm install`             | `mvn install`             |
| 4. Run the project               | `npm run dev`             | `mvn start`               |

### 🔌 Usage 

Describe how to use the application or project. Explain the main features, interactions, and any necessary steps to get started. You can include code snippets or examples to illustrate usage.

### 🪩 Feature List
Follow these steps for a good experience:
- Topic Filter inside the meny alowes you to customise the topics that are loaded.
- Click on the QuestionCard to see the answer
- Scroll down for more answer

### 🏛️ Project Structure
If applicable, provide a brief description of the project's file structure and organization. This helps readers understand how the codebase is organized and where to find specific components or modules.

### 🚧 Known Issues and Limitations:
Cold Storage Delay: The back-end is currently hosted on Azure, utilizing a cold storage mechanism. As a result, if the page remains inactive for a certain period of time, the back-end code is moved into "cold storage." Consequently, when a user accesses the page after this period of inactivity, there might be a slight delay of a few dozen seconds before the back-end responds to the front-end.

### 🧭 Contributing Guidelines: 
If you want to encourage others to contribute to your project, consider including guidelines for contributions. This can include information on how to submit bug reports, feature requests, or pull requests.

## 🌟 Project Reflection

### Learning the Art of Simplicity: 🚀 A Lesson in Overcomplication

🌱 "Don't bite off more than you can chew. Sometimes, a simple solution is the best solution."

🎯 "Don't build what you think you need, build what you actually need!"

🥴 "KISS (Keep It Simple, Stupid)."

#### 💡 Situation:
Fresh off completing the core curriculum of the Salt Java Carrier Bootcamp, I was eager to create my very first full-stack application. The goal I set for myself was not merely to produce something tangible, a testament to the 10 grueling weeks of hard work, but also to create something practical and useful. As I was well aware of the challenges awaiting me in the upcoming interviews, this project was designed with a clear purpose in mind.

#### 🔥 Task:
The task was tied closely to the lessons learned around communication between the back-end and front-end. The application was designed to use an in-memory database to store two entities: Topic and Question, with Topic having a OneToMany relationship with Question. The front-end was responsible for fetching the available topics and displaying the related questions. Moreover, the question list needed to be responsive; as users selected different topics, the question list would automatically update.

#### 💭 Action:
To achieve this, I considered two potential solutions:

A single getMapping that returns a list of Topic objects, each containing a list of Question objects.
Two separate getMapping calls: one returning a list of Topic names, and the other fetching Question objects for a specific Topic, with the topic name passed as a RequestParam in the URL.
I opted for the second solution, motivated by the belief that one should only request the data they need, and admittedly, it also seemed more technically impressive.

#### 😕 Result:
In retrospect, the chosen approach led me down a path of complexity that required significantly more effort for a less optimal result. The back-end hosting costs, based on fetch calls, meant that the additional requests were economically unwise, especially given that most calls returned largely similar data.

My initial design was based on an assumption of the application scaling to tens of thousands of questions, whereas, in reality, only a hundred or so were added. While this miscalculation didn't break the application, the time and effort spent on designing the extra endpoint, mapping the entity data into a new object, handling the topic list from the query param, dealing with issues related to special characters in topic names, and managing the additional complexity on the front-end, was substantial and, in hindsight, unnecessary.

This experience served as a valuable lesson 💡 in the importance of keeping things simple, understanding the actual needs of the project, and not overcomplicating the design unnecessarily.







