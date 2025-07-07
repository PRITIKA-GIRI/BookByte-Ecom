import '../App.css';
import { FaDownload } from 'react-icons/fa'; 

const Card = ({ image, name, author, rating, isPurchased, price }) => {
  return (
    <div className="card-container">
      <div className="card-img">
        <img src={image} alt={`${name} cover`} />
      </div>

      <div className="card-details">
        <p className="book-name"><strong>{name}</strong></p>
        <p className="book-author">By {author}</p>
        <p className="book-rating">Rating: {rating} ⭐</p>

        <div className="price-download">
          <p className="price">Rs.{price}</p>
          <button
            
          >
            <FaDownload style={{ marginRight: '5px' }} />
            if(lo)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
