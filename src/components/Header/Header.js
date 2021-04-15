import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="step-header">
            <div className="d-none d-lg-block border-bottom alig-items-center">
                <ul className="breadcrumbs">
                    <li className="step">
                        <span className="step-number-check border rounded-circle mr-3"><i className="fas fa-check"></i></span>
                        <span className="step-label">Dettagli</span>
                    </li>
                    <li className="step">
                        <span className="step-number  rounded-circle" style={{ backgroundColor: '#2e8eae', color: 'white' }}>2</span>
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
            <div className="d-block d-lg-none border-bottom">
                <ul className="breadcrumbs">
                    <li className="step">
                        <span className="step-number-check border rounded-circle mr-3"><i className="fas fa-check"></i></span>
                    </li>
                    <li className="step">
                        <span className="step-number  rounded-circle" style={{ backgroundColor: '#2e8eae', color: 'white' }}>2</span>
                    </li>
                    <li className="step">
                        <span className="step-number border rounded-circle">3</span>
                    </li>
                    <li className="step">
                        <span className="step-number border rounded-circle">4</span>
                    </li>
                    <li className="step">
                        <span className="step-number border rounded-circle">5</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;