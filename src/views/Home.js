import React from "react";
import "../sass/Home.css";

function Home() {
  return (
    <main className="home">
      <h2>Home</h2>
      <div className="home-blogs">
        <h4 className="home-blogs-sections">Articulos</h4>
        <h4 className="home-blogs-topics">Ultimos articulos</h4>
      </div>
    </main>
  );
}

export default Home;
