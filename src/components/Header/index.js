import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">
           <Link to="/">Home</Link>
           <Link to="/counter">Counter</Link>
           <Link to="/account">Check Account</Link>
        </div>
    )
}