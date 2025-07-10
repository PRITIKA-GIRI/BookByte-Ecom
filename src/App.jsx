import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header'
import Login from './pages/Login'
import Register from './pages/Register'
import { AuthProvider } from './components/context/AuthContext';
import PaymentResult from './components/PaymentResult'; // or correct path

<Routes>
  {/* Other routes */}
  <Route path="/success" element={<PaymentResult />} />
  <Route path="/failure" element={<PaymentResult />} />
</Routes>


function App() {

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/success" element={<PaymentResult />} />
          <Route path="/failure" element={<PaymentResult />} />
        </Routes>

      </Router>
    </AuthProvider>
  )
}

export default App;
