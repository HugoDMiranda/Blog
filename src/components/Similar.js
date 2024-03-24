import React from "react";
import "../sass/components-styles/Similar.css";

function Similar() {
  return (
    <div className="similar">
      <div className="similar-info">
        <img src="img/tes3.png" alt="user-img" className="similar-info-img" />
        <h2>Title</h2>
      </div>
      <div className="similar-blog">
        <h5>Topics</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus
          scelerisque ligula id hendrerit. Morbi in ultricies nunc. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos...
        </p>
      </div>
    </div>
  );
}

export default Similar;
