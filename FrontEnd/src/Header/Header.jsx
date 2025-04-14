// Header.jsx
import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="head">
            <div className="logo">
                <div className="logo-icon"></div>
                <span>CampusCart</span>
            </div>
            <nav className="nav-links">
                <a href="/" className="nav-link">Home</a>
                <a href="/about" className="nav-link">About</a>
                <a href="/contact" className="nav-link">Contact</a>
            </nav>
        </header>
    );
}

export default Header;