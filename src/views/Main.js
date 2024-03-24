import React from "react";
import "../sass/Main.css";
import Similar from "../components/Similar";

function Main() {
  return (
    <div className="main">
      <div className="main-info">
        <div className="main-info-user">
          <img
            src="img/tes3.png"
            alt="user-img"
            className="main-info-user-img"
          />
          <h4>Jane Doe</h4>
        </div>
        <h2>Title</h2>
        <p>Date 00/00/00 at 00:00</p>
      </div>
      <div className="main-blog">
        <h5>Topics</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus
          scelerisque ligula id hendrerit. Morbi in ultricies nunc. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Morbi et lectus sit amet diam facilisis pretium. Nunc lacus
          metus, consequat eget consequat et, lobortis vel felis. Cras eu dui
          tortor. Duis vulputate imperdiet ligula. Suspendisse vel velit eget
          justo porta porttitor nec in justo. Nam iaculis vehicula lacus, nec
          sagittis libero convallis non. Sed faucibus risus non dapibus
          tincidunt.
        </p>
      </div>
      <div className="main-similar">
        <Similar />
        <Similar />
        <Similar />
      </div>
    </div>
  );
}

export default Main;
