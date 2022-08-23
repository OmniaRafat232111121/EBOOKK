import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navb">
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
