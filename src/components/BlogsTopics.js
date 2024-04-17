import React from "react";
import "../sass/components-styles/BlogsTopics.css";
import Topics from "./Topics";

function BlogsTopics() {
  return (
    <div className="topics">
      <h3>Topics</h3>
      <Topics topic={"Comedy"} />
    </div>
  );
}

export default BlogsTopics;
