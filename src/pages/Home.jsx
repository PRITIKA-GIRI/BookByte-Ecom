import Header from "../components/header";
import { useState } from "react";
import '../App.css';
import Login from "./Login";
import Register from "./Register";
import Card from "../components/ProductCard";

const Home = () => {
    const [searchItems, setsearchItems] = useState("");
    function handleChange(event) {
        setsearchItems(event.target.value);
        console.log(searchItems);
    }
    return (
        <div className="big-container">
            <Header />
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
        </div>
    )


}
export default Home;