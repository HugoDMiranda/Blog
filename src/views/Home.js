import React from "react";
import "../sass/Home.css";
import BlogsSections from "../components/BlogsSections";
import BlogsTopics from "../components/BlogsTopics";

function Home() {
  return (
    <main className="home">
      <h2>Home</h2>
      <div className="home-blogs">
        <BlogsSections />
        <BlogsTopics />
      </div>
    </main>
  );
}

export default Home;
