# 🌱 [Sprout Hub](https://sprout-hub-458309.web.app/)
## 📌[https://sprout-hub-458309.web.app/](https://sprout-hub-458309.web.app)

**Sprout Hub** is a modern **Single Page Application (SPA)** built with **React.js**, providing an interactive platform for users to create, manage, and engage with content. The project follows best practices in front-end development and connects to the **SoftUni Practice Server** as the back-end.

---

## 📌 Features

### 🔓 Public Features (Accessible Without Authentication)

- **Home Page** – Overview of the platform.
- **Catalog Page** – View all created posts.
- **Details Page** – Access specific post information.
- **User Authentication** – Login and Register forms.
- **Search Functionality** – Search posts by category and title.

### 🔒 Private Features (Available for Registered Users)

- **Create New Posts** – Users can add new posts.
- **Edit / Delete Own Posts** – Users can modify or remove their content.
- **My Posts Section** – View and manage posts created by the user.
- **Like System** – Users can like posts.
- **Comment System** – Users can add, edit, and delete comments.

---

## 🏗 Project Architecture

### 📂 Folder Structure

```
sprout-hub
│── /client                  # Sprout Hub project folder
│   ├── /public              # Static assets
│   ├── /src                 # Main application source code
│   │   ├── /api             # Custom hooks to manage API requests
│   │   ├── /components      # Reusable UI components
│   │   │   ├── /authentication  # Login, Register, Logout pages
│   │   │   ├── /categories       # Search posts by category page
│   │   │   ├── /comments         # Comments section functionality
│   │   │   ├── /common           # Small reusable components (logo, bars, spinner, etc.)
│   │   │   ├── /footer           # Footer component
│   │   │   ├── /guards           # Route guards (protecting private and public routes)
│   │   │   ├── /header           # Header & navigation (including mobile nav)
│   │   │   ├── /home             # Home page
│   │   │   ├── /page404          # 404 Not Found page
│   │   │   ├── /posts            # Post resource CRUD functionality
│   │   │   │   ├── /catalog      # View all posts
│   │   │   │   ├── /create       # Create a new post
│   │   │   │   ├── /edit         # Edit own posts
│   │   │   │   ├── /my-posts     # View own posts
│   │   │   ├── /providers        # User Context provider
│   │   ├── /contexts             # Context API for global state management
│   │   ├── /error-boundary       # Rendering errors management
│   │   ├── /hooks                # Custom React hooks
│   │   ├── /services             # API communication logic (optional, if separate from /api)
│   │   ├── /utils                # Utility functions
│   │   ├── /styles               # External CSS styling
│   │   ├── App.js                # Root component
│   │   ├── index.css             # Global styles
│   │   ├── main.js               # Application entry point
│── /server                       # SoftUni Practice Server (optional local setup) with seed data
│── .gitignore                     # Files to ignore in Git
│── package.json                   # Project dependencies & scripts
│── README.md                      # Project documentation
```

---

## 🚀 Technologies Used

- **React.js** – Frontend framework
- **React Hooks & Context API** – State management
- **React Router** – Client-side routing
- **Fetch API / Axios** – Communication with the back-end
- **CSS Modules** – Component styling
- **SoftUni Practice Server** – Deployed at Google Cloud Run as Back-end server
- **GitHub** – Version control connected to Firebase SDK
- **React APP** deployed at Firebase

---

## 🔧 Setup & Installation

1️⃣ **Clone the Repository**

```bash
git clone https://github.com/MilenaGeorgieva95/Sprout-Hub.git
cd client
```

2️⃣ **Install Dependencies**

```bash
npm install
```

3️⃣ **Start the Development Server**

```bash
cd server
node server
```

4️⃣ **Access the App**  
Visit `http://localhost:5173` in your browser.

Server runs on `http://localhost:3030` in your browser.

---

## 🛠 Usage

- **Sign up / Log in** to create and manage posts, comments and likes.
- **Browse the catalog** for available posts.
- **Search by category or title** to find relevant posts.
- **Create, edit, or delete your posts** in the _My Posts_ section.
- **Like and comment on posts** from other users.
- **Logout** to switch accounts.

---

## 🔐 Authentication & Authorization

- **Guest users**: Can only view public content.
- **Registered users**: Can create, edit, delete, like, and comment on posts.
- **Route Guards**:
  - Guests can’t access private routes (e.g., My Posts, Create Post).
  - Logged-in users can’t access login/register pages.

---

## 🎯 Key React Concepts Used

✅ **React Hooks** – `useState`, `useEffect`, `useContext`, `useReducer`  
✅ **Context API** – Global state management  
✅ **Stateless & Stateful Components** – Component-driven UI  
✅ **Bound Forms** – Controlled inputs  
✅ **Synthetic Events** – Handling user interactions  
✅ **Component Lifecycle** – `useEffect` for mounting/updating/unmounting

---

## 🛡 Error Handling & Validation

- **Form validation** to prevent invalid submissions.
- **Try/catch** blocks for API requests.
- **User-friendly messages** for errors.
- **Error-boundary** for handling rendering errors.

---

## 🎨 UI/UX

- **Responsive design** for desktop & mobile.
- **Clean and modern styling** using Tailwind CSS, Bootstrap and external CSS files, for flexible and consistent UI.
- **Intuitive navigation** with clear visual hierarchy.
- **Reusable UI components** to ensure consistency across the application.
- **User-friendly forms and interactive elements** for better accessibility and experience.

---

## 🏗 Contributing

Want to improve **Sprout Hub**? Contributions are welcome!

1. **Fork the repository**
2. **Create a new branch** (`feature/new-feature`)
3. **Commit your changes**
4. **Push to GitHub & submit a PR**

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 📞 Contact

For questions or suggestions, reach out via GitHub issues.

---

### 🚀 Happy Coding! 🚀
