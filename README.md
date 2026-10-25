# Air Conditioner Service Management System

Full-stack assignment starter for student ID `2400032964`, using React + Vite, Bootstrap, Spring Boot, PostgreSQL, Swagger UI, Docker Compose, and GitHub Actions.

## Requirements
- Java 17+
- Node.js 20+ (22 recommended)
- Docker Desktop
- Git

## Run the complete application using Docker Compose
From this root directory:
```bash
docker compose up --build -d
docker compose ps
docker compose logs -f backend
```
Open:
- Frontend: http://localhost:8081
- Backend API: http://localhost:8080/api/services
- Swagger UI: http://localhost:8080/swagger-ui/index.html

Stop:
```bash
docker compose down
```
Stop and remove the PostgreSQL data volume (destructive; records will be deleted):
```bash
docker compose down -v
```

## API
- `POST /api/services` — create record (do not send `id`)
- `GET /api/services` — list records
- `GET /api/services/{id}` — read record
- `PUT /api/services/{id}` — update record
- `DELETE /api/services/{id}` — delete record

Example POST body:
```json
{
  "brand": "Daikin",
  "serviceDate": "2026-10-25",
  "serviceCost": 1500.0,
  "completed": true
}
```

## Run locally without Docker
Start PostgreSQL and create database `airconditionerdb`; update `AirConditionerService/src/main/resources/application.properties` with your local credentials. In `AirConditionerService/` run:
```bash
mvn spring-boot:run
```
In another terminal, in `AirConditionerService-Frontend/` run:
```bash
npm install
npm run dev
```
Open http://localhost:5173.

## GitHub Actions / Docker Hub
1. Create a public GitHub repository and push this project to branch `main`.
2. Create Docker Hub access token.
3. In GitHub repository Settings → Secrets and variables → Actions, create:
   - `DOCKERHUB_USERNAME`: your Docker Hub username
   - `DOCKERHUB_TOKEN`: Docker Hub access token (not your password)
4. Push a change to `main`, or open Actions and run `Build and Push Docker Images`.
5. Verify repositories `docker-backend-2400032964` and `docker-frontend-2400032964` in your Docker Hub account.

**Important:** The frontend image is built with `http://localhost:8080/api/services` as the API URL. This is correct when the browser and Docker host are on the same computer. If deploying to another host, change the URL to that host's reachable backend URL and rebuild the frontend image.

## Suggested LinkedIn article structure
1. Introduction
2. Technology Used
3. Frontend Development
4. Backend Development
5. REST API Integration and Swagger UI
6. Docker Containerization and Docker Compose
7. GitHub Actions and Docker Hub
8. What I Learned
9. Source Code and Acknowledgment

Use your own screenshots and repository links. Do not claim a workflow, image push, or deployment succeeded until you have verified it.
