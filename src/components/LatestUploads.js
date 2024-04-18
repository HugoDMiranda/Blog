import React from "react";
import { Link } from "react-router-dom";
import "../sass/components-styles/LatestUploads.css";

function LatestUploads() {
  const Test = [1, 2, 3];

  return (
    <>
      <h3 className="latest-title">Latest uploads</h3>
      <section className="latest">
        {Test.map((test) => {
          return (
            <div className="last" key={test}>
              <Link to="/Main">
                <div className="latest-info">
                  <img
                    src="img/tes3.png"
                    alt="user-img"
                    className="latest-info-img"
                  />
                  <h2>Title</h2>
                  <p>Date 00/00/00 at 00:00</p>
                </div>
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default LatestUploads;
