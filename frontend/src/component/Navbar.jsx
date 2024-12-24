import React from 'react'
import { LoginImg } from '../assets';
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  let user = { name :"keshav",
    role:"user",
    site:"Pune"
  };

  return (
    <nav
    className="navbar navbar-expand-lg"
    style={{ backgroundColor: "#e3f2fd" }}
  >
    <div className="container">
      <a className="navbar-brand d-flex align-items-center" href="/home">
        <img
          src={LoginImg}
          alt="Logo"
          className="m-0"
          style={{ maxHeight: "50px", width: "80px" }}
        />
        <span className="fw-bold ps-2">Lab Portal</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link text-primary fw-semibold" href="home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-primary fw-semibold" href="about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-primary fw-semibold" href="help">
              Help
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-primary fw-semibold" href="editor">
              Editor
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-danger fw-semibold" href="logout">
              Log Out
            </a>
          </li>
        </ul>
      </div>
      <div className="d-flex align-items-center">
        <FaUserCircle size={30} className="text-primary m-2" />
        <div>
          <strong>{user.name}</strong>
          <small className="text-muted mx-2">role : {user.role}</small>
          <small className="text-muted mx-2">site : {user.site}</small>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar