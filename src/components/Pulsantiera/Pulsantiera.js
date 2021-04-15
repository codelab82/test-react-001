import React from 'react';
import './Pulsantiera.css';

const Pulsantiera = () =>{
    return(
        <div className="pulsantiera  mb-5">
            <div className="row text-link">
                <div className="text-center col">
                    <a href="/">
                        <i className="fas fa-search"></i><br/>
                        <span className="d-md-block d-none">Seleziona cliente</span>
                    </a>
                </div>
                <div className="text-center col">
                    <a href="/">
                        <i className="fas fa-search"></i><br/>
                        <span className="d-md-block d-none">Seleziona garante</span>
                    </a>
                </div>
                <div className="text-center col">
                    <a href="/">
                        <i className="fas fa-sync-alt"></i><br/>
                        <span className="d-md-block d-none">Inverti richiedente / garante</span>
                    </a>
                </div>
                <div className="text-center col">
                    <a href="/">
                        <i className="far fa-trash-alt"></i><br/>
                        <span className="d-md-block d-none">Pulisci anagrafica richidente</span>
                    </a>
                </div>
                <div className="text-center col">
                    <a href="/">
                        <i className="far fa-trash-alt"></i><br/>
                        <span className="d-md-block d-none">Pulisci anagrafica garante</span>
                    </a>
                </div>
                <div className="text-center col">
                    <a href="/">
                        <i className="fas fa-reply-all"></i><br/>
                        <span className="d-md-block d-none">Indietro</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Pulsantiera;