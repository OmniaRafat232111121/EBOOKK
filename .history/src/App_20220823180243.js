import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Favorites from "./components/Favorites";
import Users from './components/users';
import Pagination from './components/Pagination';
import axios from 'axios';
import Loader 
useEffect(() => {
  const fetchUsers = async () => {
    setLoading(true);
    const res = await axios.get('https://example-data.draftbit.com/books?page=1&results=50&nat=us');
    setLoading(false);
    setUsers(res.data.results);

    setTotalPages(Math.ceil(res.data.results.length / 5));
  };
  fetchUsers();
}, []);

const handleClick = num => {
  setPage(num);
}
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <p className="text-center bg-red-600 text-2xl h-10 w-30">Page {page}</p>
        { loading ? <Loader/> : <>
          <Book books={books} page={page} />
          <Pagination totalPages={totalPages} handleClick={handleClick} />
        </> }
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
