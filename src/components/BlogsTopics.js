import React from "react";
import "../sass/components-styles/BlogsTopics.css";
import Topics from "./Topics";

function BlogsTopics() {
  const Test = [1, 2, 3];

  return (
    <div className="topics">
      <h3 className="topics-title">Topics</h3>
      {Test.map((test) => {
        return <Topics topic={"Comedy"} />;
      })}
    </div>
  );
}

export default BlogsTopics;
