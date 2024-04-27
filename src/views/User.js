import { useState } from "react";
import "../sass/User.css";

function User() {
  const [posts, setPosts] = useState(false);

  return (
    <div className="user">
      <div className="user-info">
        <img src="img/tes3.png" alt="user-img" className="user-info-img" />
        <h4>Jane Doe</h4>
      </div>
      <div className="user-button">
        <button onClick={() => setPosts(true)}>Favorites</button>
        <button onClick={() => setPosts(false)}>Yours</button>
      </div>
      <div className="user-posts">
        {posts ? <h3>POSTS FAVORIES</h3> : <h3>POSTS YOURS</h3>}
      </div>
    </div>
  );
}

export default User;
