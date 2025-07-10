import Header from "../components/header";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../App.css';
import { fetchBooks } from "../api/api";
import Card from "../components/ProductCard";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const [searchItems, setSearchItems] = useState("");

  const handleChange = (e) => {
    setSearchItems(e.target.value);
  };

  
  const getBooks = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetchBooks(token); // token can be null if not logged in
      setBooks(res.data);
    } catch (err) {
      console.error("Error fetching books", err);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

 
  useEffect(() => {
    if (location.state?.refresh) {
      getBooks();

      
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="big-container">
      <div className="content-container">
        <h1 onClick={() => navigate('/')} style={{ cursor: "pointer" }}>
          Mind<span style={{ color: "#1E3A8A" }}>Bloom</span>
        </h1>
        <h6>Your favorite space for inspired contents</h6>
        <input
          type="text"
          name="searchItems"
          placeholder="🔍 Search here ..."
          value={searchItems}
          onChange={handleChange}
        />
      </div>
      <br /><br />
      <h4>Latest & Popular</h4>
      <div className="d-flex popularProducts">
        {books
          .filter(book =>
            book.name.toLowerCase().includes(searchItems.toLowerCase())
          )
          .map(book => (
            <Card
              key={book.id}
              id={book.id}
              image={book.image}
              name={book.name}
              author={book.author}
              rating={book.rating}
              is_purchased={book.is_purchased}  
              price={book.price}
              available={book.quantity}
              pdf_url={`./assets/${book.pdf_url}`}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
