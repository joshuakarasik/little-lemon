import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Little Lemon</h1>
      <Link to="/booking">
        <button>Book a Table</button>
      </Link>
    </div>
  );
};

export default Home;
