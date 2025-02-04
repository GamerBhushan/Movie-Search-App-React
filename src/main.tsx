import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import "./index.css"
import { MovieSearchApp } from "./Components/MovieSearchApp/MovieSearchApp.tsx";
import { About } from "./Components/About/About.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MovieSearchApp></MovieSearchApp>}/>
        <Route path="/about" element={<About></About>} />
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
