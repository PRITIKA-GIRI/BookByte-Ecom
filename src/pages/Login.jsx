
import '../App.css';
import axios from 'axios';
import { useState, useNavigate } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            localStorage.setItem('token', res.data.token);
            alert('Login successful');
            navigate('/');
        } catch {
            alert('Invalid credentials');
        }
    };
    return (

        <div className="form-container">
            <form onSubmit={handleSubmit} method="POST">

                <label htmlFor="username" name="username">
                    Username:<br /> <input type="text" name="username" onChange={e=>setUsername(e.target.value)}/>
                </label><br />
                <label htmlFor="password" name="password">
                    Password: <br /> <input type="password" name="password" onChange={e=>setPassword(e.target.value)} />
                </label><br /><br />

                <button className="button" type="submit">Login</button>

            </form>
        </div>
    )
}
export default Login;