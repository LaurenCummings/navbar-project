import { useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'
import { links, social } from './data';
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
                        <li>
                            <a href="#">home</a>
                        </li>
                        <li>
                            <a href="#">about</a>
                        </li>
                        <li>
                            <a href="#">contact</a>
                        </li>
                        <li>
                            <a href="#">products</a>
                        </li>
                    </ul>
                    <ul className="social-icons">
                        <li>
                            <a href="https://www.twitter.com">
                                <FaXTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com">
                                <FaXTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com">
                                <FaXTwitter />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;