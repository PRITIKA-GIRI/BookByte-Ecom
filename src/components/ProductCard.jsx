import '../App.css';
import { FaDownload } from 'react-icons/fa';
import { useAuth } from "./context/AuthContext";

const Card = ({ id, image, name, author, rating, is_purchased, price, pdf_url }) => {
  const { isLoggedIn } = useAuth();

  const handleClick = () => {
  if (!isLoggedIn) return;

  if (is_purchased) {
    window.open(pdf_url, '_blank');
  } else {
    const amount = Number(price).toFixed(2);
    const orderId = `ORDER_${Date.now()}`;

    const successUrl = `http://localhost:5173/success?pid=${orderId}&amt=${amount}`;
    const failureUrl = `http://localhost:5173/failure`;

    const params = new URLSearchParams({
      amt: amount,
      psc: 0,
      pdc: 0,
      txAmt: 0,
      tAmt: amount,
      pid: orderId,
      scd: 'EPAYTEST',
      su: successUrl,
      fu: failureUrl,
    });

    const esewaUrl = `https://rc.esewa.com.np/epay/main?${params.toString()}`;

    console.log("Redirecting to eSewa test:", esewaUrl);
    window.location.href = esewaUrl;
  }
};


  return (
    <div className="card-container">
      <div className="card-img">
        <img src={`/assets/${image}`} alt={`${name} cover`} />
      </div>

      <div className="card-details">
        <p className="book-name" style={{ fontSize: '18px' }}><strong>{name}</strong></p><br />
        <p className="book-author"><i>By: {author}</i></p>
        <p className="book-rating">Rating: {rating} ⭐</p>

        <div className="price-download">
          <p className="price">Rs.{price}</p>

          <button disabled={!isLoggedIn} onClick={handleClick}>
            <FaDownload style={{ marginRight: '5px' }} />
            {is_purchased ? "Read Now" : "Purchase"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
