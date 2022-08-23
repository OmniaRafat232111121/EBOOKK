import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Favorites from "./components/Favorites";
function App() {
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
  return (
    <div className="App">
    <Navbar/>
   
  
    <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/favorites" element={<Favorites />} />

      </Routes>

    </div>
  );
}

export default App;
