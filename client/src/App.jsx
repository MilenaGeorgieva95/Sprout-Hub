import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router";
import Header from "./components/header/Header";
import Gallery from "./components/gallery/Gallery";
import Forum from "./components/forum/Forum";

import Quests from "./components/Quests/Quests";
import PostDetails from "./components/forum/PostDetails";
import PostEdit from "./components/forum/PostEdit";
import PostCreate from "./components/forum/PostCreate";
import HomePage from "./components/home/HomePage";

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
      </Routes>
    </div>
  );
}

export default App;
