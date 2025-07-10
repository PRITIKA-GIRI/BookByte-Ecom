// // UserPurchasePage.jsx
// import { useEffect, useState } from 'react';
// import { fetchUserPurchases } from '../api/api';
// import '../App.css';

// const UserPurchasePage = () => {
//   const [purchases, setPurchases] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) return;

//     fetchUserPurchases(token)
//       .then(res => setPurchases(res.data))
//       .catch(err => console.error('Failed to load purchases', err));
//   }, []);

//   return (
//     <div className="user-purchase-container">
//       <h2>Your Purchased Books</h2>
//       {purchases.length === 0 ? (
//         <p>You have not purchased any books yet.</p>
//       ) : (
//         <table className="user-purchase-table">
//           <thead>
//             <tr>
//               <th>Book</th>
//               <th>Price (Rs)</th>
//               <th>Purchase Date & Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {purchases.map((p, i) => (
//               <tr key={i}>
//                 <td>{p.bookTitle}</td>
//                 <td>Rs. {p.price.toFixed(2)}</td>
//                 <td>
//                   {new Date(p.purchased_at).toLocaleString(undefined, {
//                     year: 'numeric',
//                     month: 'short',
//                     day: 'numeric',
//                     hour: '2-digit',
//                     minute: '2-digit',
//                   })}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default UserPurchasePage;
