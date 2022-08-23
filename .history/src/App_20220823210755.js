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
  const [searchTitle, setSearchTitle] = useState("");
  useEffect(() => {
    const loadBookList = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://example-data.draftbit.com/books"
      );
      setPosts(response.data);
      setLoading(false);
    };

    loadBookList();
  }, []);
  return (
    <div className="App">
      
     
    </div>
  );
}

export default App;
