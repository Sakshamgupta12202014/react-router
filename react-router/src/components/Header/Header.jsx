import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css"

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <Link to="/">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              width="200px"
              alt="Logo"
            />
          </Link>
          <div>
            <Link to="#">Log in</Link>
            <Link to="#">Get started</Link>
          </div>
          <div>
            <ul>
              <li>
                <NavLink
                to="/"
                  className={({isActive}) =>
                    `${isActive ? "active" : "not-active"}`
                  }
                >
                  Home
                </NavLink>
                </li>

                <li>
                <NavLink
                to="/about"
                  className={({isActive}) =>
                    `${isActive ? "active" : "not-active"}`
                  }
                >
                  About
                </NavLink>
                </li>
                <li>
                <NavLink
                to="/contact"
                  className={({isActive}) =>
                    `${isActive ? "active" : "not-active"}`
                  }
                >
                  Contact
                </NavLink>
              </li>
                <li>
                <NavLink
                to="/github"
                  className={({isActive}) =>
                    `${isActive ? "active" : "not-active"}`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
