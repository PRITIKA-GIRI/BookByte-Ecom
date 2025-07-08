import Header from "../components/header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import { fetchBooks } from "../api/api";
import Card from "../components/ProductCard";
import { Navigate } from "react-router-dom";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [searchItems, setSearchItems] = useState("");
    const handleChange = (e) => {
        setSearchItems(e.target.value);
    };
    const navigate = useNavigate();

    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await fetchBooks();
                setBooks(res.data);
            }
            catch (err) {
                console.error("Error fetching books", err);
            }

        }
        getBooks();
    }, []);
    return (
        <div className="big-container">

            <div className="content-container">
                <h1 onClick={() => navigate('/')} style={{ cursor: "pointer" }}> Mind<span style={{ color: "#4A90E2" }}>Bloom </span> </h1>
                <h6>Your favorite space for inspired contents</h6>
                <input type="text"
                    name="searchItems"
                    placeholder="🔍 Search here ..."
                    value={searchItems}
                    onChange={handleChange}

                />
            </div><br /><br />
            <h4>Latest & Popular</h4>
            <div className="d-flex popularProducts">
                {
                    books.filter((book) =>
                        book.name.toLowerCase().includes(searchItems.toLowerCase()
                        ))
                        .map((book) => (
                            <Card
                                key={book.id}
                                image={book.image}
                                name={book.name}
                                author={book.author}
                                rating={book.rating}
                                isPurchased={book.is_purchased}
                                price={book.price}
                            />
                        ))
                }
            </div>
        </div>
    )


}
export default Home;