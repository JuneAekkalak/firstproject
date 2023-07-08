import "./App.css";
import * as React from "react";
import Signin from "./screen/signin";
import Signup from "./screen/signup";
import Accessories from "./screen/accessories";
import Home from "./screen/home";
import MovieDetail from "./screen/movieDetail";
import Contact from "./screen/contact";
import Favorite from "./screen/favorite";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/home" element={<Home />} />

        <Route path="/favorite" element={<Favorite />} />
        <Route path="/movie-detail" element={<MovieDetail />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
