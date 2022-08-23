import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Favorites from "./components/Favorites";

function App() {
  const [books, setBooks] = useState([]);
  const [loading,setLoading]=useState(false);
  const [bookPerPage]=useState(10);
  const [currentPage,seCurrentPage]=useState(1);

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
const indexOfLastBook = currentPage * bookPerPage;
const indexOfFirstBook = indexOfLastBook - bookPerPage;
const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
//change Page
const Paginate=(pageNumber)=>seCurrentPage(pageNumber)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      
      <Footer />
      
    </div>
  );
}

export default App;
