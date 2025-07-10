
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css'; 

const Register=()=>{
    const [remail, setEmail] = useState('');
    const [rusername, setUsername] = useState('');
  const [rpassword, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', 
        { username:rusername,
          email:remail,
          password:rpassword});
      alert('Registration successful. Please login.');
      navigate('/login');
    } catch { 
      alert('Registration failed.');
    }
  };

 return(

    <div className="form-container">
        <form action="/register"  onSubmit={handleSubmit}method="POST">
        <h4 className="text-center">Register Form</h4><br />
        <label htmlFor="remail" name="remail">
            Email:<br/> <input type="email" name="remail" value={remail} onChange={e => setEmail(e.target.value)}/>
        </label><br />
    
        <label htmlFor="rusername" name="rusername">
            Username:<br/> <input type="text" name="rusername" value={rusername}onChange={e => setUsername(e.target.value)}/>
        </label><br />
        <label htmlFor="rpassword" name="rpassword">
            Password: <br/> <input type="password" name="rpassword" value={rpassword} onChange={e => setPassword(e.target.value)}/>
        </label><br />
        
        <button className="button" type="submit">Register</button>
        
        </form>
    </div>
 )
}
export default Register;