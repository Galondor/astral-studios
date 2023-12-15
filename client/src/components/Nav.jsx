import React from 'react';
import Logo from '../assets/Astral Studios.png';

const Nav = () => {
    return (
        <nav>
            <div className="nav_container">
                <ul className="nav_links">
                    <li className='nav_item'>
                        <a href="/" className='nav_link'>Home</a>
                    </li>
                    <li className='nav_item'>
                        <a href="/" className='nav_link'>About</a>
                    </li>
                    <li className='nav_item middle_item'>
                    <a href="/">
                        <img src={Logo} alt="Astral Studios" className='logo' />
                    </a>
                    </li>
                    <li className='nav_item'>
                        <a href="/" className='nav_link'>Learn</a>
                    </li>
                    <li className='nav_item'>
                        <a href="/" className='nav_link'>Play</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;