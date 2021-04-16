import React from 'react';
import './Header.css';

const HeaderV2 = () => {
    return (
        <div className="step-header">
            <div className="d-none d-lg-block border-bottom alig-items-center">
                <ul className="breadcrumbs">
                    <li className="step">
                        {/* <span className="step-number-check border rounded-circle mr-3"><i className="fas fa-check"></i></span> */}
                        <a href="#"><span className="step-label step-link">Dati richiedente</span></a>
                    </li>
                    <li className="step">
                        {/* <span className="step-number  rounded-circle" style={{ backgroundColor: '#2e8eae', color: 'white' }}>2</span> */}
                        <a href="#"><span className="step-label step-link">Dati aggiuntivi richiedente</span></a>
                    </li>
                    <li className="step">
                        {/* <span className="step-number border rounded-circle">3</span> */}
                        <a href="#"><span className="step-label step-link">Dati garante</span></a>
                    </li>
                    <li className="step">
                        {/* <span className="step-number border rounded-circle">4</span> */}
                        <a href="#"><span className="step-label step-link">Dati aggiuntivi garante</span></a>
                    </li>
                    <li className="step">
                        {/* <span className="step-number border rounded-circle">5</span> */}
                        <a href="#"><span className="step-label step-link">Dati pagamento</span></a>
                    </li>
                    <li className="step">
                        {/* <span className="step-number border rounded-circle">5</span> */}
                        <a href="#"><span className="step-label step-link">Dati fatturazione</span></a>
                    </li>
                    <li className="step">
                        {/* <span className="step-number border rounded-circle">5</span> */}
                        <a href="#"><span className="step-label step-link">Privacy</span></a>
                    </li>
                </ul>
            </div>
            {/* <div className="d-block d-lg-none border-bottom">
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
            </div> */}
        </div>
    )
}

export default HeaderV2;