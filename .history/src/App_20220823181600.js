import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Favorites from "./components/Favorites";
import ReactPaginate from "react-paginate";
function App() {
  return (
    <div className="App">
      <ReactPaginate className="text-black"
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      pageCount={15}
      />
    </div>
  );
}

export default App;
