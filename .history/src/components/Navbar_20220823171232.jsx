import React from "react";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-black w-100 h-20 text-white flex align-center justify-evenly">
      <div>
        <a href="/" className="mt-5 py-4 text-xl font-semibold">Booky</a>
      </div>
      <div>
        <Link to="/favorites">
          <button className=" mt-5 w-30 h-10 px-4 text-lg font-semibold bg-red-500 rounded-sm">Your Favorites</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
