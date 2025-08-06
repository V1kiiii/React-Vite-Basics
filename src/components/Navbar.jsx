// src/components/Navbar.jsx
// import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#eee' }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}
