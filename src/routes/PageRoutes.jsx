import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Blog from "../pages/Blog.jsx";
import Login from "../pages/Login.jsx";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h1 className="align-middle">Not Found</h1>} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default PageRoutes;
