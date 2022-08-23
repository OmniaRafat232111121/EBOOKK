import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BOOK_DETAILS_URL } from "../API";

const BookDetails = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${BOOK_DETAILS_URL}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className='w-full  py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      
        <div>
        <h2>{book.title}</h2>
        <img src={book?.image_url} alt="#" />
         
        </div>
        
      <div className="book-description">
        <h2 className="text-2xl font-semibold py-1 px-2"  >Description</h2>
        <p>{book?.description}</p>
        <h2 className="text-xl font-semibold py-1 px-2" >Authors</h2>
        <p >{book?.authors}</p>
        <h2 className="text-xl font-semibold py-1 px-2" >Genres</h2>
        <p >{book?.genres}</p>
      </div>
    </div>
   
   </div>
    
   

  
 
  );
};

export default BookDetails;
