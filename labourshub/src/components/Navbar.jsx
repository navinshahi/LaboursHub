import React from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'
import { useAuth } from './security/AuthContext'


export default function Navbar() {

    const authContext = useAuth();

    const isAuthenticated = authContext.isAuthenticated;

    function handleLogout(){
        authContext.logout();
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img alt='Logo' src={logo}></img> Labours Hub</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle active" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Sector
                    </Link>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/">Electrician</Link></li>
                        <li><Link className="dropdown-item" to="/">Plumber</Link></li>
                        <li><Link className="dropdown-item" to="/">Carpenter</Link></li>
                        <li><Link className="dropdown-item" to="/">Cleaner</Link></li>
                        <li><Link className="dropdown-item" to="/">Painter</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                    </li>
                </ul>
                { !isAuthenticated && <Link to="/login"><button className="btn btn-outline-primary" type="submit">Login / Register</button></Link>}
                { isAuthenticated && <button className="btn btn-outline-primary" type="button" onClick={handleLogout}>Logout</button>}
                </div>
            </div>
        </nav>
    )
}
