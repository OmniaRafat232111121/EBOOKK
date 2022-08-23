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
      setBookList(response.data);
      setLoading(false);
    };

    loadBookList();
  }, []);
  return (
    <div className="App">
    <h3>Search Filter</h3>
    <input
      className="w-30 h-full"
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
     
    </div>
  );
}

export default App;
