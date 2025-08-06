
# CodeWiseAI – AI-Powered Code Review Portal

## Overview
**CodeWiseAI** is a full-stack AI-powered collaborative code review portal built with **React + TypeScript** on the frontend and **Spring Boot** on the backend. Developers can submit code snippets or GitHub pull requests for AI-assisted reviews, with human verification and intelligent workload balancing for reviewers.

---

## Tech Stack

| Layer          | Technology |
|----------------|------------|
| **Frontend**   | React, TypeScript, Tailwind CSS, Monaco Editor, Axios |
| **Backend**    | Spring Boot (Java 17+), Spring Web, Spring Data MongoDB, Spring Security, Spring WebSocket |
| **Database**   | MongoDB (Atlas or local) |
| **Auth**       | JWT, GitHub OAuth2 (Spring Security OAuth2 Client) |
| **AI**         | OpenAI API (GPT-4) |
| **File Storage**| AWS S3 |
| **Notifications**| WebSocket (STOMP) + AWS SES |
| **Deployment** | Docker, AWS ECS, Nginx |
| **CI/CD**      | Jenkins or GitHub Actions |

---

## System Workflow

1. **User Authentication**
   - Login with GitHub OAuth or email/password (JWT-based session).

2. **Code Submission**
   - Submit code snippet, file upload, or GitHub PR link.
   - Store metadata in MongoDB, files in AWS S3.

3. **AI Review**
   - AI generates initial review.
   - Store results with `AI_REVIEWED` status.

4. **Reviewer Assignment**
   - Intelligent workload balancer assigns reviews to least-loaded reviewers.
   - Priority queue for urgent submissions.

5. **Human Review**
   - Reviewers approve/reject with comments via WebSocket-powered live updates.

6. **Final Notifications**
   - Submitter notified in real-time + via email.

7. **Search & Filter**
   - Filter reviews by language, priority, and status.

---

## Architecture Diagram

```
[React + TypeScript Frontend]
          |
      Axios API calls
          |
[Spring Boot Backend: REST + WebSocket]
  |   |       |       |
Auth AI  MongoDB   AWS S3
(JWT)    (Data)    (Files)
  |
AWS SES (Email)
```

---

## Project Structure

```
codewiseai/
├── frontend/          # React + TypeScript
├── backend/           # Spring Boot
├── docs/              # API contracts, design notes
├── docker/            # Docker configs
└── README.md
```

---

## Development Plan

### PHASE 1: Project Setup & Tools
- Create folder structure
- Initialize Git repository
- Setup `frontend` and `backend` projects

### PHASE 2: Backend – Spring Boot Setup
```bash
curl https://start.spring.io/starter.zip   -d dependencies=web,security,data-mongodb,devtools,oauth2-client,lombok,validation,websocket   -d baseDir=backend -o backend.zip

unzip backend.zip -d backend
cd backend
./mvnw spring-boot:run
```

### PHASE 3: MongoDB + Domain Models
- Install MongoDB locally or setup MongoDB Atlas
- Configure `application.yml`
- Create `User`, `CodeSubmission` entities

### PHASE 4: AI Integration
- Use Spring `WebClient` to call OpenAI API
- Store AI review results in MongoDB

### PHASE 5: Authentication & Security
- Implement JWT-based authentication
- Add GitHub OAuth login with Spring Security

### PHASE 6: WebSocket for Live Notifications
- Setup STOMP over SockJS in Spring Boot
- Implement WebSocket endpoints for real-time updates

### PHASE 7: Frontend Setup
```bash
npx create-react-app frontend --template typescript
cd frontend
npm install axios react-router-dom socket.io-client
```
- Integrate Tailwind CSS
- Implement Monaco Editor for code display

### PHASE 8: CI/CD & Docker
- Dockerize backend and frontend
- Setup Jenkins or GitHub Actions for build and deploy
- Push images to AWS ECR and deploy to ECS

---

## Weekly Milestone Plan

| Week | Goal |
|------|------|
| Week 1 | Backend project + MongoDB models + REST APIs |
| Week 2 | AI integration + reviewer logic |
| Week 3 | Spring Security + JWT + GitHub OAuth |
| Week 4 | WebSocket notifications |
| Week 5 | Frontend UI setup + integration |
| Week 6 | Dockerize, CI/CD pipeline, deploy to AWS |
| Week 7 | Polish, add tests, showcase on GitHub + LinkedIn |

---

## Deployment Notes
- Use **MongoDB Atlas** for production DB
- Configure AWS S3 for file storage
- Use Nginx as a reverse proxy to serve frontend & backend
- Enable HTTPS with AWS ACM certificates

---

## License
This project is licensed under the MIT License.
