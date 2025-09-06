import React from "react";
import "./Blog.css";
import { Axios } from "axios";
import { Link } from "react-router-dom";
export const Blog = () => {
  const toggleSubject = () => {};

  return (
    <div className="blog-page">
      <div className="blog-page-left"></div>
      <div className="blog-page-right">
        <div className="israel-trip-category">
          <ul>
            <li onClick={toggleSubject}>
              <Link to={"/blog/nature"}>nature</Link>{" "}
            </li>
            <li onClick={toggleSubject}>
              <Link to={"/blog/hotel"}>hotels</Link>{" "}
            </li>
            <li onClick={toggleSubject}>
              <Link to={"/blog/baches"}></Link> baches
            </li>
            <li onClick={toggleSubject}>
              <Link to={"/blog/attraction"}></Link> attraction
            </li>
            <li onClick={toggleSubject}>
              <Link to={"/blog/Parties"}>Parties</Link> Parties
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
