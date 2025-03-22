import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router";
import Header from "./components/header/Header";
import Gallery from "./components/gallery/Gallery";
import Forum from "./components/forum/posts-page/Forum";

import Quests from "./components/Quests/Quests";
import PostDetails from "./components/forum/post-details/PostDetails";
import PostEdit from "./components/forum/create-post/PostEdit";
import PostCreate from "./components/forum/create-post/PostCreate";
import HomePage from "./components/home/HomePage";
import Page404 from "./components/page404/Page404";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Routes>
        <Route path="/posts" element={<Forum />} />
        <Route path="/posts/:postId/details" element={<PostDetails />} />
        <Route path="/posts/:postId/edit" element={<PostEdit />} />
        <Route path="/posts/create" element={<PostCreate />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/quests" element={<Quests />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
