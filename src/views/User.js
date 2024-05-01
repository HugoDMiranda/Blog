import { useState } from "react";
import { Link } from "react-router-dom";
import "../sass/User.css";

function User() {
  const [posts, setPosts] = useState(false);
  const Test = [1, 2, 3, 4, 5];

  return (
    <div className="user">
      <div className="user-info">
        <img src="img/tes3.png" alt="user-img" className="user-info-img" />
        <h4>Jane Doe</h4>
      </div>
      <div className="user-button">
        <button
          className={posts ? "active" : ""}
          onClick={() => setPosts(true)}
        >
          Favorites
        </button>
        <button
          className={posts ? "" : "active"}
          onClick={() => setPosts(false)}
        >
          Yours
        </button>
      </div>
      <div className="user-posts">
        {posts
          ? Test.map((test) => {
              return (
                <div
                  className="user-posts-favorites animate__animated animate__fadeInLeft "
                  key={test}
                >
                  <Link to="/Main">
                    <div className="user-posts-favorites-info">
                      <img
                        src="img/tes3.png"
                        alt="user-img"
                        className="user-posts-favorites-info-img"
                      />
                      <h2>Favorites</h2>
                    </div>
                    <div className="user-posts-favorites-topics">
                      <h5>Topics</h5>
                      <p>Date 00/00/00 at 00:00</p>
                    </div>
                  </Link>
                </div>
              );
            })
          : Test.map((test) => {
              return (
                <div
                  className="user-posts-favorites animate__animated animate__fadeInLeft "
                  key={test}
                >
                  <Link to="/Main">
                    <div className="user-posts-favorites-info">
                      <img
                        src="img/tes3.png"
                        alt="user-img"
                        className="user-posts-favorites-info-img"
                      />
                      <h2>Yours</h2>
                    </div>
                    <div className="user-posts-favorites-topics">
                      <h5>Topics</h5>
                      <p>Date 00/00/00 at 00:00</p>
                    </div>
                  </Link>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default User;
