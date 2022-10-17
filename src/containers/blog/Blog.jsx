import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";
import { Link } from "react-router-dom";

const Blog = () => (
  <div className="step0__blog section__padding" id="blog">
    <div className="step0__blog-heading">
      <h1 className="gradient__text">Blog</h1>
    </div>
    <div className="step0__blog-container">
      <div className="step0__blog-container_groupA">
        <Link to="/blog/5">
          <Article imgUrl={blog05} text="Your rank is not your worth" />
        </Link>
      </div>
      <div className="step0__blog-container_groupB">
        <div class="item">
          <Link to="/blog/2">
            <Article imgUrl={blog02} text="Slumps" />
          </Link>
        </div>
        <div class="item">
          <Link to="/blog/3">
            <Article imgUrl={blog03} text="VOD Review" />
          </Link>
        </div>
        <div class="item">
          <Link to="/blog/4">
            <Article imgUrl={blog04} text="Goal Setting" />
          </Link>
        </div>
        <div class="item">
          <Link to="/blog/1">
            <Article imgUrl={blog01} text="Inconsistency" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
