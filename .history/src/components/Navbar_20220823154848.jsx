import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black w-100 h-10 text-white flex align-center justify-evenly">
      <div>
        <h1 className="py-2 text-xl font-semibold">Booky</h1>
      </div>
      <div>
        <Link to="/favorites">
          <button className="py-2 text-xl font-semibold bg-red-00 rounded-md">Your Favorites</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
