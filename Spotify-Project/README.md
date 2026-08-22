# Spotify Artist

A full-stack music platform for artists and listeners. Users can register, sign in securely, browse albums and tracks, play music, and manage artist-only content such as album creation and music uploads.

## Demo

- **Live application:** https://spotify-artist-omega.vercel.app

## Features

- User registration and login
- Cookie-based authentication with protected routes
- Artist-only album creation and music upload workflows
- Album browsing and album detail views
- In-app music player with persistent player controls
- Image and audio asset storage through ImageKit
- Responsive React user interface
- REST API for authentication and music management

## Skills Demonstrated

- Full-stack JavaScript development
- REST API design and integration
- Authentication, authorization, and password hashing
- JWT and HTTP cookie handling
- MongoDB data modeling with Mongoose
- Role-based access control for artist features
- File upload handling and cloud media storage
- React component architecture and Context API state management
- Client-side routing and protected navigation
- API communication with Axios
- Responsive UI development with Tailwind CSS
- Deployment of frontend and backend services

## Tech Stack

### Frontend

- React 19
- Vite
- React Router
- Tailwind CSS
- Axios
- Lucide React

### Backend

- Node.js
- Express 5
- MongoDB
- Mongoose
- JWT authentication
- ImageKit media storage

## Packages Used

### Backend Dependencies

- `@imagekit/nodejs` - ImageKit SDK for media storage
- `bcryptjs` - Password hashing
- `cookie-parser` - Reading authentication cookies
- `cors` - Cross-origin request support
- `dotenv` - Environment variable loading
- `express` - REST API server
- `jsonwebtoken` - JWT creation and verification
- `mongoose` - MongoDB object modeling
- `multer` - Multipart file upload handling
- `nodemon` - Development server auto-restart

### Frontend Dependencies

- `react` and `react-dom` - UI development
- `react-router-dom` - Client-side routing
- `axios` - HTTP requests
- `tailwindcss` - Utility-first styling
- `@tailwindcss/vite` - Tailwind CSS Vite integration
- `lucide-react` - Interface icons

### Frontend Development Tools

- `vite` - Development server and production builds
- `eslint` - JavaScript and React linting
- `@vitejs/plugin-react` - React support for Vite
- `eslint-plugin-react-hooks` - React Hooks lint rules
- `eslint-plugin-react-refresh` - Fast Refresh lint rules
- `globals` - ESLint global definitions

## Terminal Commands

Run these commands from the project root.

### Backend

```bash
cd Backend
npm install
npm run dev
```

For a production start:

```bash
cd Backend
npm start
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

## Environment Configuration

The backend requires environment values for the database, authentication, and ImageKit configuration. The frontend uses `VITE_PORT_URL` to connect to the backend API.

Use local environment files for development and keep secrets out of Git.

## Git Commands

Clone the repository and enter the project:

```bash
git clone <repository-url>
cd Spotify-Project
```

Create a feature branch:

```bash
git checkout -b feature/your-feature-name
```

Review and commit changes:

```bash
git status
git add .
git commit -m "Describe your changes"
```

Push the branch:

```bash
git push -u origin feature/your-feature-name
```

Update the local branch:

```bash
git pull origin main
```

## License

This project is intended for learning and portfolio purposes.
