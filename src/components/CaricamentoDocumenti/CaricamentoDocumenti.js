import React from 'react';
import './CaricamentoDocumenti.css';

const CaricamentoDocumenti = () => {
    return (
        <div className="caricamento-documenti mt-3 border">
            <h5 className="p-3"> Caricamento documenti</h5>
            <p className="pl-3"><strong>Documenti di identità</strong></p>
            <div className="card contratto-cliente">
                <div className="row justify-content-between">
                    <p className="card-text pl-4 pt-3">
                        <i className="fas fa-check" style={{ color: '#81CE33' }}></i>&nbsp;
                        <span>Contratto cliente con piano personalizzato</span>
                    </p>
                    <p className="card-text pr-4 pt-3">
                        <i className="fas fa-info-circle"></i>&nbsp;&nbsp;&nbsp;
                        <i className="fas fa-download"></i>
                    </p>
                </div>
            </div>
            <div className="card buy-back mt-3">
                <div className="row justify-content-between">
                    <p className="card-text pl-4 pt-3">
                        <i className="fas fa-check" style={{ color: '#81CE33' }}></i>&nbsp;
                        <span>Buy back</span>
                    </p>
                    <p className="card-text pr-4 pt-3">
                        <i className="fas fa-info-circle"></i>&nbsp;&nbsp;&nbsp;
                        <i className="fas fa-download"></i>
                    </p>
                </div>
            </div>
            <div className="card sepa mt-3">
                <div className="row justify-content-between">
                    <p className="card-text pl-4 pt-3">
                        <i className="fas fa-check" style={{ color: '#81CE33' }}></i>&nbsp;
                        <span>Sepa</span>
                    </p>
                    <p className="card-text pr-4 pt-3">
                        <i className="fas fa-info-circle"></i>&nbsp;&nbsp;&nbsp;
                        <i className="fas fa-download"></i>
                    </p>
                </div>
            </div>
            <p className="pl-3 mt-3"><strong>Carta di identità</strong></p>
            <div className="card carta-identità mt-3">
                <div className="row justify-content-between">
                    <p className="card-text pl-4 pt-3">
                        <i className="fas fa-check" style={{ color: '#81CE33' }}></i>&nbsp;
                        <span>carta-identità-fronte.jpg</span>&nbsp;&nbsp;&nbsp;
                        <i className="far fa-image" style={{color:'#FF0000', cursor:'pointer'}}></i>&nbsp;&nbsp;
                        <i className="far fa-trash-alt" style={{color:'#FF0000', cursor:'pointer'}}></i>&nbsp;&nbsp;
                        <button className="btn btn-small btn-sm">conferma</button>
                    </p>
                    <p className="card-text pr-4 pt-3">
                        <i className="fas fa-info-circle"></i>&nbsp;&nbsp;&nbsp;
                        <i className="fas fa-download"></i>
                    </p>
                </div>
                <div className="row justify-content-between">
                    <p className="card-text pl-4">
                        <i className="fas fa-check" style={{ color: '#D1DCEB' }}></i>&nbsp;
                        <span>carta-identità-retro.jpg</span>
                    </p>
                    <p className="card-text pr-4">
                        <i className="fas fa-info-circle"></i>&nbsp;&nbsp;&nbsp;
                    </p>
                </div>
                <div className="row justify-content-between">
                    <p className="card-text pl-4">
                        <i className="fas fa-check" style={{ color: '#D1DCEB' }}></i>&nbsp;
                        <span>carta-identità.jpg</span>
                    </p>
                    <p className="card-text pr-4">
                        <i className="fas fa-info-circle"></i>&nbsp;&nbsp;&nbsp;
                    </p>
                </div>
            </div>
            <p className="pl-3 mt-3"><strong>Passaporto</strong></p>
            <div className="card passaporto mt-3">
                <div className="row justify-content-between">
                    <p className="card-text pl-4 pt-3">
                        <i className="fas fa-check" style={{ color: '#D1DCEB' }}></i>&nbsp;
                        <span>passaporto-fronte.jpg</span>
                    </p>
                    <p className="card-text pr-4 pt-3">
                        <i className="fas fa-info-circle"></i>&nbsp;&nbsp;&nbsp;
                    </p>
                </div>
                <div className="row justify-content-between">
                    <p className="card-text pl-4">
                        <i className="fas fa-check" style={{ color: '#D1DCEB' }}></i>&nbsp;
                        <span>passaporto-retro.jpg</span>
                    </p>
                    <p className="card-text pr-4">
                        <i className="fas fa-info-circle"></i>&nbsp;&nbsp;&nbsp;
                    </p>
                </div>
                <div className="row justify-content-between">
                    <p className="card-text pl-4">
                        <i className="fas fa-check" style={{ color: '#D1DCEB' }}></i>&nbsp;
                        <span>passaporto.jpg</span>
                    </p>
                    <p className="card-text pr-4">
                        <i className="fas fa-info-circle"></i>&nbsp;&nbsp;&nbsp;
                    </p>
                </div>
            </div>
            <p className="pl-3 mt-3"><strong>Tessera sanitaria</strong></p>
            <div className="card tessera-sanitaria mt-3">
                <div className="row justify-content-between">
                    <p className="card-text pl-4 pt-3">
                        <i className="fas fa-check" style={{ color: '#D1DCEB' }}></i>&nbsp;
                        <span>tessera-sanitaria-fronte.jpg</span>
                    </p>
                    <p className="card-text pr-4 pt-3">
                        <i className="fas fa-info-circle"></i>&nbsp;&nbsp;&nbsp;
                    </p>
                </div>
                <div className="row justify-content-between">
                    <p className="card-text pl-4">
                        <i className="fas fa-check" style={{ color: '#D1DCEB' }}></i>&nbsp;
                        <span>tessera-sanitaria-retro.jpg</span>
                    </p>
                    <p className="card-text pr-4">
                        <i className="fas fa-info-circle"></i>&nbsp;&nbsp;&nbsp;
                    </p>
                </div>
            </div>
            <div className="row justify-content-end my-3 mr-3">
                <button className="btn btn-color">COMPLETA OPERAZIONE</button>
            </div>
        </div>
    )
};

export default CaricamentoDocumenti;