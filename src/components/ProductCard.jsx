import '../App.css';
import { FaDownload } from 'react-icons/fa'; // Make sure to install react-icons

const Card = ({ image, name, author, rating, isPurchased, price }) => {
  return (
    <div className="card-container">
      <div className="card-img">
        <img src={image} alt={`${name} cover`} />
      </div>

      <div className="card-details">
        <p className="book-name"><strong>{name}</strong></p>
        <p className="book-author">by {author}</p>
        <p className="book-rating">Rating: {rating} ⭐</p>

        <div className="price-download">
          <p className="price">Rs.{price}</p>
          <button
            className={`download-button ${isPurchased ? 'purchased' : 'disabled'}`}
            disabled={!isPurchased}
            title={isPurchased ? 'Download' : 'Purchase required'}
          >
            <FaDownload style={{ marginRight: '5px' }} />
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
