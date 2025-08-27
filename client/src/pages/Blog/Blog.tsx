import React from "react";
import "./Blog.css";
import { Axios } from "axios";
export const Blog = () => {
  const toggleSubject = () => {};

  return (
    <div className="blog-page">
      <div className="blog-page-left"></div>
      <div className="blog-page-right">
        <div className="israel-trip-category">
          <ul>
            <li onClick={toggleSubject}>nature</li>
            <li onClick={toggleSubject}>hotels</li>
            <li onClick={toggleSubject}>baches</li>
            <li onClick={toggleSubject}>attraction</li>
            <li onClick={toggleSubject}>Parties</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
