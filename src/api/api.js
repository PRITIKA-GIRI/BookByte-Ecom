import axios from 'axios';
const API=axios.create({
    baseURL:'http://localhost:5000/api',
})

export const registerUser=(userData)=>{
    return API.post('/auth/register',userData);
};

export const loginUser=(credentials)=>{
    return API.post('/auth/login',credentials);
};
export const fetchBooks=()=>{
    return API.get('/books');
};
export const recordPurchase = ({ bookId, orderId, amount }, token) => {
  return API.post(
    '/purchase',
    { bookId, orderId, amount },
    {
      headers: {
        Authorization: `Bearer ${token}`, // send token in Authorization header
      },
    }
  );
};
