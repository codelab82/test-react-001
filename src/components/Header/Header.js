import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="wrapper d-none d-lg-block border-bottom">
                <div className="container">
                    <div className="step">
                        <ul className="breadcrumbs">
                            <li className="step">
                                <span className="step-number-check border rounded-circle mr-3"><i className="fas fa-check"></i></span>
                                <span className="step-label">Dettagli</span>
                            </li>
                            <li className="step">
                                <span className="step-number  rounded-circle" style={{ backgroundColor: '#FF0000', color: 'white' }}>2</span>
                                <span className="step-label">Compilazione Dati</span>
                            </li>
                            <li className="step">
                                <span className="step-number border rounded-circle">3</span>
                                <span className="step-label">Firma / Riconoscimento</span>
                            </li>
                            <li className="step">
                                <span className="step-number border rounded-circle">4</span>
                                <span className="step-label">Documenti</span>
                            </li>
                            <li className="step">
                                <span className="step-number border rounded-circle">5</span>
                                <span className="step-label">Verifica Pratica</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;