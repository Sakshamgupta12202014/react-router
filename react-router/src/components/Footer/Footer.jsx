import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Footer() {
    return (
        <footer >
            <div >
                <div >
                    <div >
                        <Link to="/" >
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                width="200px"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div >
                        <div>
                            <h2>Resources</h2>
                            <ul >
                                <li >
                                    <Link to="/" >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" >
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 >Follow us</h2>
                            <ul >
                                <li>
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 >Legal</h2>
                            <ul >
                                <li >
                                    <Link to="#" >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
