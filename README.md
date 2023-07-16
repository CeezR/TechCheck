# TechCheck
A fullstack application build for practising technical interview questions. 

Learning Objective(s)
- Develop a Fullstack application from start to finish
- Deploy Back-end to Azure
- Deploy Front-end to Vercel

# 🚀 Getting Started / Installation
Follow these steps to get the application up and running in your local environment:

1. Clone the repo
``` git clone https://github.com/CeezR/TechCheck ```

| Steps                            | Front-end                 | Back-end                  |
| ---------------------------------| ------------------------- | ------------------------- |
| 2. Navigate into repo            | `cd front-end`            | `cd back-end`             |
| 3. Install Dependencies          | `npm install`             | `mvn install`             |
| 4. Run the project               | `npm run dev`             | `mvn start`               |

## 🎯 Usage
Follow these steps for a good experience:
- Topic Filter inside the meny alowes you to customise the topics that are loaded.
- Click on the QuestionCard to see the answer
- Scroll down for more answer

## Tech Stack
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Spring](https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Apache Maven](https://img.shields.io/badge/apache_maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

When building this project I ended up spending a good chunk of time on a feature which ended up going unused.
Not only did this prove to be a waste of time

## Lesson learned along the way 

### Dont bite off more then you can chew, sometimes a simple solution is the best solution.

### Dont build what you think you need, build what you actualy need! (KISS)
Situation: Having finished the core curriculum of the salt java carrier bootcap I was excited to take my shot at building my very first fullstack application.
The goal I set out for my self was to get something out, anthing to give some much deserved catersis to the 10 weeks of hard work I put in. 
However being the practical guy that I am, I was unwiling to let my first work be nothing more than a show peice. Having known of the challenges
ahead of me in my uppcoming interviews I decided on this project.

Task: The task with regards to the lesson had to do with the comunication between back-end and front-end. The application makes use of a in memory database to store two entities: Topic and Question where the topic contain OneToMany relationship with Question. The front-end needs to know what topic exist and also
needs to display the questions of said topic. Furthermore the question list had to be responsive, so when the user changes the topic list, the questionlist
automaticaly reloads.

Action: When outlining this goal, I considered two solution: 
1. One single getMapping that returns topics list object with a quesion list field.
2. Two getMapping, one that returns the topics name, and one that gets the question by topics where the url includes the RequestParam as a long string of topics
I went with the second solution thinking that you should only request the data you need, furthermore it sound more techinaly impresive. XD

Result: The result of my decision lead me to spend many times the effort for a worst result. The back-end hosting cost is priced based on fetch calls macking the additional calls a bad econamical decision, beside the calls mostly contained the same data. I desinged my hobby small scale project as if it would contain tens of tousand of questions, when in reality I only ended up adding a hundred or so. This issue was not application breking but designing the additional enpoint, maping the entity data into the new object, getting the topic list from the querry param, fixing issue related to special characters in topic names and the additnal complexcity on the front-end realy realy was not worth it. 



