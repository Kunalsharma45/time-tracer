# Productivity Tracker - Productivity & Time Analysis Platform

**Productivity Tracker** is a sophisticated productivity and time analysis application engineered to transform how users track tasks, manage complexity, and visualize their efficiency. Built with a modern, responsive **MERN stack** architecture, it combines intuitive design with powerful analytics to provide actionable insights into personal and professional time management.

## 🚀 Key Features

### 🔐 Advanced Authentication & Security

- **Immersive User Experience**:
  - **Galaxy Background**: A stunning, interactive 3D particle background using `ogl` for a visually engaging login/signup experience.
  - **Unified Sliding Interface**: Seamless transitions between Login and Signup forms without page reloads.
- **Dual Login Methods**: Seamless access via **Google OAuth** (Firebase integration) or traditional **Email/Password**.
- **Secure Registration**: Robust sign-up flow with automatic profile creation and existing user checks.
- **Enterprise-Grade Security**:
  - **JWT Authorization**: Stateless, secure session management with token-based access.
  - **Bcrypt Hashing**: Industry-standard password encryption.
  - **Protected Routes**: Client-side routing guards to prevent unauthorized access.
- **Forgot Password Workflow**:
  - **Modern UI**: Consistent Galaxy-themed interface for password recovery.
  - 3-step recovery: Email Request -> OTP Verification -> Password Reset.
  - **Real-time OTP**: backend-generated one-time passwords with 5-minute expiry and countdown timers.

### 📊 Deep Analytics Dashboard

- **Visual Productivity Hub**: A centralized dashboard aggregating key metrics.
- **Dynamic Focus Score**: Proprietary algorithm calculating daily "Focus Scores" based on task completion and time logged.
- **Activity Heatmaps**: Visual representation of activity density over time.
- **Category Breakdown**: Pie and Bar charts displaying time distribution across categories (Work, Study, Creative, etc.).

### � Personal Analysis Module

- **Detailed Reports**: Granular views of time expenditure by day, week, or custom data ranges.
- **Goal Tracking**: Set and monitor daily/weekly hour goals (e.g., "Study for 20 hours/week").
- **Dynamic Focus Trends**: Real-time visualization of your focus consistency over the last 7 days.
- **Trend Analysis**: Compare current performance against historical data to identify productivity patterns.

### 📁 Comprehensive Project Management

- **Project Lifecycle**: Full CRUD capabilities for projects with rich metadata (Start/End dates, Priority, Status).
- **Hierarchical Task System**:
  - **Projects** contain **Tasks**.
  - **Tasks** contain **Subtasks** for granular tracking.
- **Smart Task Management**:
  - Status tracking (Todo, In Progress, Completed).
  - Priority flagging (Low, Medium, High).
  - Due date reminders.
  - **Subtask Deletion**: granular control to remove subtasks as needed.
- **Project Analysis**: Dedicated analytics page for each project showing progress velocity and team contributions.
- **Advanced Project Controls**:
  - **Edit Project Modal**: Managers can update project details, deadlines, and priorities instantly.
- **Role-Based Access Control**:
  - **Managers**: Can edit project details, assign members, and manage configuration.
  - **Members**: Can view tasks and update their own progress.

### 👤 User-Centric Experience

- **Customizable Profile**:
  - Manage personal details, bio, and professional role.
  - **Cloudinary Integration**: High-performance image upload and optimization for profile avatars.
- **Theme Customization**: Fully supported **Dark Mode** and Light Mode with persistence.
- **Responsive Design**: Mobile-first architecture ensuring a seamless experience across Desktop, Tablet, and Mobile devices.
- **Persistent Navigation**: Smooth transitions and easy access to core features via a smart Navbar.

## 🛠️ Technology Stack

### Frontend (Client)

- **Core**: [React.js](https://react.dev/) (v18) with [Vite](https://vitejs.dev/) for lightning-fast builds.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for a utility-first, custom design system.
- **State Management**:
  - [Redux Toolkit](https://redux-toolkit.js.org/) for global app state (Auth, UI).
  - React Context API for specialized features (Theme, Toast).
- **Routing**: [React Router DOM](https://reactrouter.com/) (v6) with nested routes and layouts.
- **Data Visualization**: [Recharts](https://recharts.org/) for responsive, composable charts.
- **Forms**: [React Hook Form](https://react-hook-form.com/) combined with [Yup](https://github.com/jquense/yup) validation.
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Lucide, FontAwesome, etc.).
- **HTTP Client**: [Axios](https://axios-http.com/) with interceptors.

### Backend (Server)

- **Runtime**: [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/) REST API.
- **Database**: [MongoDB](https://www.mongodb.com/) (Atlas) with Mongoose for schema modeling.
- **Auth**: Firebase Admin SDK (Google Verify) & `jsonwebtoken` (JWT).
- **Storage**: Cloudinary SDK for media asset management.
- **Email**: EmailJS / Nodemailer integration for transactional emails.
- **Validation**: Joi / express-validator for request payload sanitization.

## 📂 Project Structure

```bash
/
├── client/                 # Frontend React Application
│   ├── src/
│   │   ├── assets/         # Static assets (images, vectors)
│   │   ├── components/     # Atomic reusable UI components
│   │   │   ├── layout/     # MainLayout, Sidebar
│   │   │   ├── navbar/     # Responsive Navbar
│   │   │   └── ...
│   │   ├── hooks/          # Custom Hooks (useAuth, useTheme)
│   │   ├── pages/          # Route Views (Dashboard, ProjectDetails)
│   │   ├── context/        # Context Providers
│   │   ├── redux/          # Redux Slices and Store
│   │   └── utils/          # Helper functions
│   └── ...
│
└── server/                 # Backend Node.js Application
    ├── controllers/        # Logic Layer (Auth, Project, Task logic)
    ├── routes/             # API Endpoints
    ├── models/             # Database Schemas (User, Project, Task)
    ├── middleware/         # Auth guards, Error handling
    ├── services/           # External services (Email, Storage)
    └── config/             # Environment & DB Config
```

## ⚙️ Installation & Setup

### Prerequisites

- Node.js (v16+)
- MongoDB Connection String (Atlas URI)
- Firebase Project Credentials
- Cloudinary Account
- EmailJS Keys

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/TimeFlow.git
cd TimeFlow
```

### 2. Backend Configuration

Navigate to `/server` and install dependencies:

```bash
cd server
npm install
```

Create `.env` in `/server`:

```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/timeflow
JWT_SECRET=your_super_secret_jwt_key
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
# Email Configuration
EMAILJS_SERVICE_ID=...
EMAILJS_TEMPLATE_ID=...
EMAILJS_PUBLIC_KEY=...
```

Start Development Server:

```bash
npm run dev
```

### 3. Client Configuration

Navigate to `/client` and install dependencies:

```bash
cd ../client
npm install
```

Create `.env` in `/client`:

```env
VITE_API_URL=http://localhost:5000
# Firebase Config
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
# EmailJS Config (Client-side failover)
VITE_EMAILJS_PUBLIC_KEY=...
```

Start the React App:

```bash
npm run dev
```

## � Contribution

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/NewFeature`).
3.  Commit changes (`git commit -m 'Add NewFeature'`).
4.  Push to branch (`git push origin feature/NewFeature`).
5.  Open a Pull Request.

---
Created by Kunal Sharma