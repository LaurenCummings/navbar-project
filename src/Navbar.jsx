import './Navbar.css';
import { useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'
import { links, social } from './data.jsx';
import logo from './logo.svg'

function Navbar() {
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo" />
                    <button className="nav-toggle">
                        <FaBars />
                    </button>
                </div>
                <div className="links-container show-container">
                    <ul className="links">
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <ul className="social-icons">
                        {social.map((socialIcon) => {
                            const { id, url, icon } = socialIcon;
                            return (
                                <li key={id}>
                                    <a href={url}>{icon}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;