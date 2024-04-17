import React from "react";
import { MdTheaterComedy } from "react-icons/md";

function Topics({ topic }) {
  return (
    <div>
      <MdTheaterComedy />
      <h4>{topic}</h4>
    </div>
  );
}

export default Topics;
