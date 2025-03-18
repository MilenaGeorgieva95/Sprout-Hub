import "./App.css";
import { Routes, Route } from "react-router";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Gallery from "./components/gallery/Gallery";
import Forum from "./components/forum/Forum";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Quests from "./components/Quests/Quests";
import PostDetails from "./components/forum/PostDetails";

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Forum />} />
        <Route path="/posts/:postId/details" element={<PostDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/quests" element={<Quests />} />
      </Routes>
    </div>
  );
}

const navigation = [
  { name: "Forum", href: "/forum" },
  { name: "Gallery", href: "/gallery" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Our Books", href: "/books" },
  { name: "Members", href: "/members" },
];
export default App;
