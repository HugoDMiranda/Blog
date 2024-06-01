import React from "react";
import "../sass/components-styles/Topics.css";
import { MdTheaterComedy } from "react-icons/md";
import { Link } from "react-router-dom";

function Topics({ topic }) {
  return (
    <Link to="/Main" className="topic animate__animated animate__fadeInRight">
      <MdTheaterComedy className="topic-logo" size={"90px"} />
      <h3 className="topic-text">{topic}</h3>
    </Link>
  );
}

export default Topics;
