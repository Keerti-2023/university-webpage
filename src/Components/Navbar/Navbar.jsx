import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [bg, setBg] = useState(false);
  const [username, setUsername] = useState("");

  // GitHub Pages base path
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleScroll = () => {
      setBg(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    const name = localStorage.getItem("username");

    if (name) {
      setUsername(name);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");

    alert("Logged out successfully!");

    window.location.href = `${baseUrl}Login.html`;
  };

  return (
    <nav className={`container ${bg ? "darknav" : ""}`}>

      {/* Logo */}
      <img src={logo} alt="University Logo" className="logo" />

      <ul>

        {/* Home */}
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
          >
            Home
          </Link>
        </li>

        {/* Programs */}
        <li>
          <Link
            to="programs"
            smooth={true}
            offset={-280}
            duration={500}
          >
            Programs
          </Link>
        </li>

        {/* About */}
        <li>
          <Link
            to="about"
            smooth={true}
            offset={-160}
            duration={500}
          >
            About
          </Link>
        </li>

        {/* Gallery */}
        <li>
          <Link
            to="gallery"
            smooth={true}
            offset={-290}
            duration={500}
          >
            Gallery
          </Link>
        </li>

        {/* Testimony */}
        <li>
          <Link
            to="testimony"
            smooth={true}
            offset={-290}
            duration={500}
          >
            Testimony
          </Link>
        </li>

        {/* Contact */}
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-250}
            duration={500}
          >
            Contact
          </Link>
        </li>

        {/* Logged In */}
        {username ? (
          <>
            <li className="welcome-text">
              Welcome, <strong>{username}</strong>
            </li>

            <li>
              <button
                className="btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          /* Not Logged In */
          <>
            <li>
              <a href={`${baseUrl}Signup.html`}>
                <button className="btn">
                  Sign Up
                </button>
              </a>
            </li>

            <li>
              <a href={`${baseUrl}Login.html`}>
                <button className="btn">
                  Login
                </button>
              </a>
            </li>
          </>
        )}

      </ul>
    </nav>
  );
};

export default Navbar;