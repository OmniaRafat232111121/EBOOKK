import React, { useState, useEffect } from "react";
import "../App";
import { API_URL } from "../API";
import axios from "axios";
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";
const BookList = () => {
  const [books, setBooks] = useState([]);
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [BookList, setBookList] = useState([]);
  const [searchTitle, setSearchTitle] = useState("true");
  useEffect(() => {
    const loadBookList = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://example-data.draftbit.com/books/"
      );
      setBookList(response.data);
      setLoading(false);
    };

    loadBookList();
  }, []);
  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };
  

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='w-full  py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      <h3 className="text-center text">Search Filter</h3>
    <input
      className="w-full h-30"
      type="text"
      placeholder="Search..."
      onChange={(e) => setSearchTitle(e.target.value)}
    />
    {loading ? (
      <h4>Loading ...</h4>
    ) : (
      BookList
        .filter((value) => {
          if (searchTitle === "") {
            return value;
          } else if (
            value.title.toLowerCase().includes(searchTitle.toLowerCase())
          ) {
            return value;
          }
        })
        .map((book) => <h5 key={book.id}>{book.title}</h5>)
    )}

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
