import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black w-f flex align-center justify-center">
      <div>
        <h1>React Books App</h1>
      </div>
      <div>
        <Link to="/favorites">
          <h3>Your Favorites</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;