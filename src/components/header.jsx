

const Header = () => {
    return (
        <div>
            <header className='header'>
                <nav className="d-flex justify-content-between align-items-center w-100">
                    <div className='left'><strong><h4><span style={{color:"black"}}>Book</span>Byte </h4></strong></div>
                    <div className="d-flex gap-3 align-items-center right">
                        <button><a href="/login">Login</a></button>
                        <button><a href="/register">Signup</a></button>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Header;