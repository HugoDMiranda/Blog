import React from "react";
import "../sass/Home.css";
import BlogsSections from "../components/BlogsSections";
import BlogsTopics from "../components/BlogsTopics";
import LatestUploads from "../components/LatestUploads";

function Home() {
  return (
    <main className="home">
      <h2>Home</h2>
      <div className="home-blogs">
        <BlogsSections />
        <div className="home-blogs-topics">
          <BlogsTopics />
          <LatestUploads />
        </div>
      </div>
    </main>
  );
}

export default Home;
