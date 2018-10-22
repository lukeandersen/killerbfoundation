import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
    <header className="container row navbar m-t-4 m-b-4">
        <div className="col-xs-12">
            <img src="/assets/logo.png" alt="logo" />
            <nav className="nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="about" className="nav-link">About</Link>
                <Link to="login" className="nav-link">Login</Link>
            </nav>
        </div>
    </header>
)

export default Navbar
