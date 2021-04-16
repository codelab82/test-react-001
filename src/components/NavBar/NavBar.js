import React from 'react';
import logoBianco from '../../images/logo-bianco.png';
import './NavBar.css';

const NavBar = () => {
    return (
        <>
            <div>
                <img src="/imgs/desired-white-bar.jpg" style={{ "maxWidth": "100%" }} />
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <img src={logoBianco} alt="logo" className="logo-toyota" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Blocchi</a>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                040597
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Something else here</a>
                            </div>
                        </li> */}
                    </ul>
                </div>
                <div className="convenzione">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="convenzione-text">040597</span>
                            </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Something else here</a>
                            </div>
                </div>
                <div className="logo-desired ">
                    <img src="/imgs/desired-logo.jpg" />
                </div>
            </nav>
        </>
    )
}

export default NavBar;