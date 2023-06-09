import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.scss";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link  active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/experience">Experience</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;