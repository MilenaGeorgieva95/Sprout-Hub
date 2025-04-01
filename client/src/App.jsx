import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router";
import Header from "./components/header/Header";
import Forum from "./components/posts/catalog/Forum";

import PostDetails from "./components/posts/details/PostDetails";
import PostEdit from "./components/posts/edit/PostEdit";
import PostCreate from "./components/posts/create/PostCreate";
import HomePage from "./components/home/HomePage";
import Page404 from "./components/page404/Page404";
import Footer from "./components/footer/Footer";
import Register from "./components/authentication/register/Register";

import Login from "./components/authentication/login/Login";
import Logout from "./components/authentication/logout/Logout";
import MyPosts from "./components/posts/my-posts/MyPosts";
import AuthGuard from "./components/guards/AuthGuard";
import GuestGuard from "./components/guards/GuestGuard";
import UserProvider from "./components/providers/UserProvider";
import Search from "./components/search/search-page/Search";

function App() {

  return (
    <UserProvider>
      <div className="bg-white h-full fullHeight">
        <Header />
        <Routes>
          <Route path="/posts" element={<Forum />} />
          <Route path="/posts/:postId/details" element={<PostDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Page404 />} />

          <Route element={<AuthGuard />}>
          <Route path="/posts/:postId/edit" element={<PostEdit />} />
          <Route path="/posts/create" element={<PostCreate />} />
          <Route path="/my-posts" element={<MyPosts/>} />
          <Route path="/logout" element={<Logout />} />
          </Route>

          <Route element={<GuestGuard />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          </Route>

        </Routes>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
