import { useState } from "react";

const Header = ({isLoggedIn,setIsLoggedIn,setShowLogin,setShowSignUp}) => {
    
    return (
        <div>
            <header className='header'>
                <nav className="d-flex justify-content-between align-items-center w-100">
                    <div className='left'><strong><h4><span style={{color:"black"}}>Book</span>Byte </h4></strong></div>
                    <div className="d-flex gap-3 align-items-center right">
                        { !isLoggedIn?
                        (<>
                        <button onClick={()=>{
                            setShowLogin(true);
                            setShowSignUp(false);
                        }}>Login</button>
                        <button onClick={()=>{
                            setShowLogin(false);
                            setShowSignUp(true);
                        }}>Signup</button>
                        </>)
                        :
                        (<>
                        <button>Admin</button>
                        <button><a href="/logout">Logout</a></button>
                        </>)
                        }

                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Header;