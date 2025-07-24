# 📱 Facebook-like Social Network

A full-stack Facebook-like social networking platform built with a modern JavaScript framework on the frontend and Go on the backend. This application includes features such as user authentication, posts, profiles, groups, real-time chat, and notifications.

---

# 🚀 Objectives

The goal of this project is to develop a robust and scalable social network application with:

- ✅ Followers system  
- ✅ Public and private profiles  
- ✅ Post creation with image support and privacy controls  
- ✅ Groups with membership, invitations, and events  
- ✅ Notifications and real-time messaging  
- ✅ Responsive frontend with a clean UI  
- ✅ Backend APIs and WebSocket server  
- ✅ Containerized deployment with Docker

---

# 📁 Project Structure

```bash
.
├── backend
│   ├── pkg
│   │   ├── db
│   │   │   ├── migrations
│   │   │   │   └── sqlite
│   │   │   │       ├── 000001_create_users_table.up.sql
│   │   │   │       ├── 000001_create_users_table.down.sql
│   │   │   │       ├── ...
│   │   │   └── sqlite.go
│   ├── server.go
│   └── ...other files
├── frontend
│   └── ...JS Framework of your choice (e.g., Next.js, Vue.js, etc.)
├── docker
│   ├── Dockerfile.backend
│   ├── Dockerfile.frontend
│   └── docker-compose.yml
```
# 🧰 Tech Stack
## 🖥 Frontend
- HTML, CSS, JavaScript

- Responsive design

- Frameworks: Next.js, Vue.js, or any modern JS framework

- Communicates with backend via REST APIs

## Backend
- Language: Go

- WebSocket for real-time chat

- Session and cookie-based authentication

- Image handling: JPEG, PNG, GIF

- SQLite as the database

# 📦 Database
- SQLite with migrations using golang-migrate or similar

# 🔐 Authentication
- User registration and login

- Session + Cookie-based authentication

- Required fields:

- Email, Password, First Name, Last Name, Date of Birth

- Optional fields:

- Avatar, Nickname, About Me

- Persistent sessions until logout

# 👥 Followers
- Send follow requests (for private profiles)

- Auto-follow (for public profiles)

- Accept/Decline incoming requests

# 👤 Profiles
- Public or Private toggle

- Display:

    - Personal info

    - Posts

    - Followers / Following

# 📝 Posts
- Create posts and comments (with optional images/GIFs)

- Privacy levels:

    - Public

    - Followers only

    - Custom followers

# 👨‍👩‍👧 Groups
- Create and browse groups

- Group membership via invitation or request

- Group-specific posts

- Event creation:

    - Title, Description, Time, RSVP options

# 💬 Chat
- One-on-one messaging between mutual followers (via WebSocket)

- Emoji support

- Group chat rooms for members

# 🔔 Notifications
- Follows (for private profiles)

- Group invites

- Group join requests

- Event creation

- Shown on every page in a separate UI from chats

# 🐳 Dockerized Deployment
## Backend Container
- Go application

- SQLite database

- Exposes API endpoints and WebSocket server

## Frontend Container
- JS Framework app (served via Nginx or similar)

- Serves static files and communicates with backend

# Docker Usage
```
docker-compose up --build
```
Ensure you expose appropriate ports for inter-container and client communication.

# 🔄 Database Migrations
- All migrations stored in: backend/pkg/db/migrations/sqlite

- Example structure:
```
000001_create_users_table.up.sql
000001_create_users_table.down.sql
```
- Applied programmatically from sqlite.go

# ✅ Allowed Go Packages
- Standard library

- gorilla/websocket

- golang-migrate

- sqlite3

- bcrypt

- uuid

# 📚 Learning Outcomes
- Go backend development with real-world features

- Session and cookie-based authentication

- SQLite usage and migrations

- SQLite usage and migrations
Real-time WebSocket communication

- SQLite usage and migrations
Containerization with Docker

- SQLite usage and migrations
Frontend-backend integration

- Secure user management and encryption practices

# 🏁 Getting Started
1. Clone the repository

2. Choose a frontend framework and set up the UI

3. Run migrations:
```
migrate -path backend/pkg/db/migrations/sqlite -database sqlite3://db.sqlite up
```
4. Build and run the backend

5. Launch the frontend

6. Use Docker Compose for full stack deployment

# 📄 License
This project is for educational purposes.

# 👥 Contributors
- [Yassine hamdouni](https://github.com/YHamdouni)
- [Omar Rharbi](https://github.com/omrharbi)
- [Yassine bahbib](https://github.com/ysnbhb)
- [Sofyane aljaoui](https://github.com/saljaoui)
- [Yahya khaldy](https://github.com/yakhaldy)
- [Mohamed bakhouch](https://github.com/simoz404)
