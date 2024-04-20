import React from "react";
import "../sass/components-styles/BlogsTopics.css";
import Topics from "./Topics";

function BlogsTopics() {
  const Test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <h3 className="topics-title">Topics</h3>
      <div className="topics">
        {Test.map((test) => {
          return <Topics topic={"Comedy"} />;
        })}
      </div>
      <hr />
    </>
  );
}

export default BlogsTopics;
