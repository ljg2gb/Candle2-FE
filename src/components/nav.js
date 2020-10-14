import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
    return(
        <div className='nav'>
            <h3>Candle 2.0</h3>
            <ul className='nav-links'>
                <li>
                    <Link to="/" className="link" role="link">Home</Link>
                </li>
                <li>
                    <Link to="/newBirthday" className="link" role="link">Add Birthday</Link>
                </li>
            </ul>
        </div>
    )
}