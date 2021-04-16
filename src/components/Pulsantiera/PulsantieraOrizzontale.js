import React from 'react';
import './Pulsantiera.css';

const PulsantieraOrizzontale = () =>{
    return(
        <div className="pulsantiera sticky mb-5">
            <div className="row text-link">
                <div className="text-center col">
                    <a href="/">
                    <i className="fas fa-save"></i><br />
                            <span className="d-md-block d-none">Salva bozza</span>
                    </a>
                </div>
                <div className="text-center col">
                    <a href="/">
                    <i className="fas fa-save"></i><br />
                            <span className="d-md-block d-none">Salva proposta</span>
                    </a>
                </div>
                <div className="text-center col">
                    <a href="/">
                    <i className="fas fa-save"></i><br />
                            <span className="d-md-block d-none">Salva Fast Contract</span>
                    </a>
                </div>
                <div className="text-center col">
                    <a href="/">
                    <i className="fas fa-reply-all"></i><br />
                            <span className="d-md-block d-none">Indietro</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PulsantieraOrizzontale;