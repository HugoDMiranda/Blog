import React from "react";
import "../sass/components-styles/Topics.css";
import { MdTheaterComedy } from "react-icons/md";

function Topics({ topic }) {
  return (
    <div className="topic animate__animated animate__fadeInRight">
      <MdTheaterComedy className="topic-logo" size={"90px"} />
      <h3 className="topic-text">{topic}</h3>
    </div>
  );
}

export default Topics;
