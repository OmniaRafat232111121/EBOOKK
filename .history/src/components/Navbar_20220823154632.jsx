import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black w-100 h-10 text-white flex align-center justify-evenly">
      <div>
        <h1 className="mt-2">Booky</h1>
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
