import { useAuth } from '../components/context/AuthContext';
import '../App.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
const Login = () => {
     const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            localStorage.setItem('token', res.data.token);
            login(res.data.token); 
            alert('Login successful');
            navigate('/');
        } catch {
            alert('Invalid credentials');
        }
    };
    return (

        <div className="form-container">
            <form onSubmit={handleSubmit} method="POST">
                <h4 className="text-center">Login Form</h4><br />
                <label htmlFor="username" name="username">
                    Username:<br /> <input type="text" name="username" onChange={e=>setUsername(e.target.value)}/>
                </label><br />
                <label htmlFor="password" name="password">
                    Password: <br /> <input type="password" name="password" onChange={e=>setPassword(e.target.value)} />
                </label><br />

                <button className="button" type="submit">Login</button>

            </form>
        </div>
    )
}
export default Login;