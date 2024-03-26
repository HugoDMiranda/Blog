import React from "react";
import "../sass/components-styles/BlogsSections.css";
import { Link } from "react-router-dom";

function BlogsSections() {
  const Test = [1, 2, 3, 4, 5];

  return (
    <section className="sections">
      {Test.map((test) => {
        return (
          <div className="section">
            <Link to="/Main">
              <div className="sections-info">
                <img
                  src="img/tes3.png"
                  alt="user-img"
                  className="sections-info-img"
                />
                <h2>Title</h2>
                <p>Date 00/00/00 at 00:00</p>
              </div>
              <div className="sections-sum">
                <h5>Topics</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  finibus scelerisque ligula id hendrerit. Morbi in ultricies
                  nunc. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Morbi et lectus sit
                  amet diam facilisis pretium. Nunc lacus metus, consequat eget
                  consequat et, lobortis vel felis. Cras eu dui tortor. Duis
                  vulputate imperdiet ligula. Suspendisse vel velit eget justo
                  porta porttitor nec in justo. Nam iaculis vehicula lacus, nec
                  sagittis libero convallis non. Sed faucibus risus non dapibus
                  tincidunt.
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
}

export default BlogsSections;
