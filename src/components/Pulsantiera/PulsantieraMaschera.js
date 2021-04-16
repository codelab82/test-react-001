import React from 'react';
import './Pulsantiera.css';

export function PulsantieraMaschera() {
    return (
        <div className="">
            <div className="pulsantiera mb-2">
                <div className="row text-link">
                    <div className="text-center col-12">
                        <a href="/">
                            <i className="fas fa-save"></i><br />
                            <span className="d-md-block d-none">Salva bozza</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="pulsantiera mb-2">
                <div className="row text-link">
                    
                    <div className="text-center col-12">
                        <a href="/">
                            <i className="fas fa-save"></i><br />
                            <span className="d-md-block d-none">Salva proposta</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="pulsantiera mb-2">
                <div className="row text-link">
                    
                    <div className="text-center col-12">
                        <a href="/">
                            <i className="fas fa-save"></i><br />
                            <span className="d-md-block d-none">Salva Fast Contract</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="pulsantiera mb-2">
                <div className="row text-link">
                    
                    <div className="text-center col-12">
                        <a href="/">
                            <i className="fas fa-reply-all"></i><br />
                            <span className="d-md-block d-none">Indietro</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function PulsantieraMascheraV2() {
    return (
        <div className="">
            <div className="pulsantiera mb-2">
                <div className="row text-link">
                    <div className="text-center col-12">
                        <a href="/">
                            <i className="fas fa-save"></i> &nbsp;
                            <span className="d-md-inline d-none">Salva bozza</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="pulsantiera mb-2">
                <div className="row text-link">
                    
                    <div className="text-center col-12">
                        <a href="/">
                            <i className="fas fa-save"></i> &nbsp;
                            <span className="d-md-inline d-none">Salva proposta</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="pulsantiera mb-2">
                <div className="row text-link">
                    
                    <div className="text-center col-12">
                        <a href="/">
                            <i className="fas fa-save"></i> &nbsp;
                            <span className="d-md-inline d-none">Salva Fast Contract</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="pulsantiera mb-2">
                <div className="row text-link">
                    
                    <div className="text-center col-12">
                        <a href="/">
                            <i className="fas fa-reply-all"></i> &nbsp;
                            <span className="d-md-inline d-none">Indietro</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}