import React from "react";
import "../App";
import { useAppContext } from "./context/appContext";

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log("favorites are", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className='w-full  py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      
    <div className="favorites">
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div className='w-full shadow-xl flex flex-start justify-center  align-center  p-4 my-4 rounded-lg hover:scale-180 duration-300'>
          <div key={book.id} className="book">
            <div>
              <h4 className="text-2xl font-semibold py-1 px-2 bg-red-500" >{book.title}</h4>
            </div>
            <div>
              <img src={book.image_url} alt="#" />
            </div>
            <div>
              {favoritesChecker(book.id) ? (
                <button  className="  mt-5 rounded-md text-white  font-semibold px-10 bg-black w-30 h-20 text-center  " onClick={() => removeFromFavorites(book.id)}>
                  Remove from Favorites
                </button>
              ) : (
                <button className="  mt-5 rounded-md text-white  font-semibold px-10 bg-black w-30 h-20 text-center  " onClick={() => addToFavorites(book)}>
                  Add to Favorites
                </button>
              )}
            </div>
          </div>
          </div>
        ))
      ) : (
        <h1 className="text-center font-semibold flex align-cem">You don't have any favorite books yet!</h1>
      )}
    </div>
    </div>
   
    </div>
  );
};

export default Favorites;
