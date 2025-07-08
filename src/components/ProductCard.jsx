import '../App.css';
import cover from '../assets/cover1.jpg';  
import { FaDownload } from 'react-icons/fa';
import { useAuth } from "./context/AuthContext";
const Card = ({ image, name, author, rating, isPurchased, price }) => {

  const { isLoggedIn } = useAuth();
  return (
    <div className="card-container">
      <div className="card-img">
         <img src={cover} alt={`${name} cover`} />
      </div>
     
      <div className="card-details">
        <p className="book-name" style={{fontSize:'18px'}}><strong>{name}</strong></p><br />
        <p className="book-author"><i>By: {author}</i></p>
        <p className="book-rating">Rating: {rating} ⭐</p>

        <div className="price-download">
          <p className="price">Rs.{price}</p>

          <button disabled={!isLoggedIn}>
            <FaDownload style={{ marginRight: '5px' }} />Purchase

          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;