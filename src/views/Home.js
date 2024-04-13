import React from "react";
import "../sass/Home.css";
import BlogsSections from "../components/BlogsSections";
import BlogsTopics from "../components/BlogsTopics";
import LatestUploads from "../components/LatestUploads";
import HomeSlide from "../components/HomeSlide";

function Home() {
  return (
    <main className="home">
      <HomeSlide />
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
