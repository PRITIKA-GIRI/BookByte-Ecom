import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header'
import Login from './pages/Login'
import Register from './pages/Register'
import { AuthProvider } from './components/context/AuthContext';


function App() {

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>

      </Router>
    </AuthProvider>
  )
}

export default App;
