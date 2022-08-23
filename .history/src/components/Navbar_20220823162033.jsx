import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black w-100 h-20 text-white flex align-center justify-evenly">
      <div>
        <h1 className="mt-5 text-xl font-semibold">Booky</h1>
      </div>
      <div>
        <Link to="/favorites">
          <button className=" mt-5  text-lg font-semibold bg-red-500 rounded-sm">Your Favorites</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
