import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import '../App.css'

const Header = () => {
    const { isLoggedIn, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    }
    return (
        <div>
            <header className='header'>
                <nav className="d-flex justify-content-between align-items-center w-100">
                    <div className='left'><strong><h4 onClick={() => navigate('/')} style={{ cursor: "pointer" }}><span style={{ color: "black" }}>Mind</span>Bloom </h4></strong></div>
                    <div className="d-flex gap-3 align-items-center right">
                        {!isLoggedIn ? (
                            <>
                                <button onClick={() => navigate('/login')}>Login</button>
                                <button onClick={() => navigate('/register')}>Register</button>
                            </>
                        ) : (
                            <>
                                <>
                                    <img
                                        src="/assets/userIcon.svg"
                                        alt="adminlogo"
                                        onClick={() => navigate('/admin')}
                                        style={{ width: "32px", height: "32px", cursor: "pointer",marginRight:"30px" }}
                                    />


                                    <button onClick={handleLogout}>Logout</button>
                                </>
                            </>
                        )

                        }

                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Header;