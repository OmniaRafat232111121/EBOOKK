import React, { useState, useEffect } from "react";
import "../App";
import { API_URL } from "../API";
import axios from "axios";
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";
const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading,setLoading]=useState(false);
  const [bookPerPage]=useState(10);
  const [currentPage,seCurrentPage]=useState(1);
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  const navigate = useNavigate();
  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    const fetchBooks=async()=>{
      setLoading(true);
      const res=await fetch("API_URL");
      const data=await res.json();
      setBooks(data);
      setLoading(false)
    }
    fetchBooks();
  },[]);
    
//Get current Books
const indexO
  return (
    <div className='w-full  py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      
      {books.map((book) => (
        <div className='w-full shadow-xl flex flex-start justify-center  align-center  p-4 my-4 rounded-lg hover:scale-180 duration-300'>
        <div key={book.id} className="book">
          <div>
            <h4 className="text-2xl font-semibold py-1 px-2 ">{book.title}</h4>
          </div>
          <div>
            <img
              src={book.image_url}
              alt="#"
              className="w-25 h-15 mb-5"
              onClick={() => navigate(`/books/${book.id}`)}
            />
          </div>
          <div>
            {favoritesChecker(book.id) ? (
              <button className=" rounded-md text-white  font-semibold px-10 bg-black w-30 h-20 text-center  "  onClick={() => removeFromFavorites(book.id)}>
                Remove from Favorites
              </button>
            ) : (
              <button  className=" rounded-md text-white  font-semibold px-10 bg-black w-30 h-20 text-center  " onClick={() => addToFavorites(book)}>
                Add to Favorites
              </button>
            )}
          </div>
        </div>

        </div>
      ))}
    </div>
   

    </div>
   

  
  );
};

export default BookList;
