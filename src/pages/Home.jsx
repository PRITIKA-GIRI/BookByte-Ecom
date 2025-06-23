import Header from "../components/header";
import { useState } from "react";
import '../App.css';
import Login from "./Login";
import Register from "./Register";
import Card from "../components/ProductCard";

const Home = ({showLogin,showSignUp,setShowLogin,setShowSignUp}) => {
     const [searchItems, setSearchItems] = useState("");
        const handleChange = (e) => {
        setSearchItems(e.target.value);
    };
    return (
        <div className="big-container">
            
            <div className="content-container">
                <h1 >Book<span style={{ color: "purple" }}>Byte</span> </h1>
                <h5>Favourite place for your favourite books</h5><br />
                <input type="text"
                    name="searchItems"
                    placeholder="🔍 Search books here ..."
                    value={searchItems}
                    onChange={handleChange}

                />
            </div>
            <h4>Latest & Popular</h4>
            <div className="d-flex popularProducts">

                <Card
                    image="https://example.com/book.jpg"
                    name="Romeo and Juliet"
                    author="William Shakespeare"
                    rating={4.5}
                    isPurchased={false}
                />
                 <Card
                    image="https://example.com/book.jpg"
                    name="Romeo and Juliet"
                    author="William Shakespeare"
                    rating={4.5}
                    isPurchased={false}
                />
                 <Card
                    image="https://example.com/book.jpg"
                    name="Romeo and Juliet"
                    author="William Shakespeare"
                    rating={4.5}
                    isPurchased={false}
                />
                <Card
                    image="https://example.com/book.jpg"
                    name="Romeo and Juliet"
                    author="William Shakespeare"
                    rating={4.5}
                    isPurchased={false}
                />
                


            </div>
            {showLogin && (
                <>
                    <div className="modal-overlay" onClick={() => setShowLogin(false)} />
                    <Login onClose={() => setShowLogin(false)} />
                </>
            )}

            {/* ✅ Show Signup as a modal */}
            {showSignUp && (
                <>
                    <div className="modal-overlay" onClick={() => setShowSignUp(false)} />
                    <Register onClose={() => setShowSignUp(false)} />
                </>
            )}
        </div>
    )


}
export default Home;