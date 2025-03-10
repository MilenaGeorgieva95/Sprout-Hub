import "./App.css";
import { Routes, Route } from "react-router";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import Forum from "./components/Forum/Forum";

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/gallery" element={<Gallery />} />
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
