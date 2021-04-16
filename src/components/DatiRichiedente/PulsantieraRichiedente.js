import React from 'react';

export function PulsantieraRichiedente() {
    return(
        <div className="pulsantiera mb-5">
            <div className="row text-link">
                <div className="text-center col-12 my-2">
                    <a href="/">
                        <i className="fas fa-search"></i><br/>
                        <span className="d-md-block d-none">Seleziona cliente</span>
                    </a>
                </div>
                <div className="text-center col-12 my-2">
                    <a href="/">
                        <i className="fas fa-sync-alt"></i><br/>
                        <span className="d-md-block d-none">Inverti richiedente / garante</span>
                    </a>
                </div>
                <div className="text-center col-12 my-2">
                    <a href="/">
                        <i className="far fa-trash-alt"></i><br/>
                        <span className="d-md-block d-none">Pulisci anagrafica richiedente</span>
                    </a>
                </div>
                <div className="text-center col-12 my-2">
                    <a href="/">
                        <i class="fas fa-cloud-upload-alt"></i><br/>
                        <span className="d-md-block d-none">Carica documento</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export function PulsantieraGarante() {
    return(
        <div className="pulsantiera mb-5">
            <div className="row text-link">
                <div className="text-center col-12 my-2">
                    <a href="/">
                        <i className="fas fa-search"></i><br/>
                        <span className="d-md-block d-none">Seleziona garante</span>
                    </a>
                </div>
                <div className="text-center col-12 my-2">
                    <a href="/">
                        <i className="fas fa-sync-alt"></i><br/>
                        <span className="d-md-block d-none">Inverti richiedente / garante</span>
                    </a>
                </div>
                <div className="text-center col-12 my-2">
                    <a href="/">
                        <i className="far fa-trash-alt"></i><br/>
                        <span className="d-md-block d-none">Pulisci anagrafica garante</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export function PulsantieraContatti() {
    return(
        <div className="pulsantiera mb-5">
            <div className="row text-link">
                <div className="text-center col-12 my-2">
                    <a href="/">
                        <i className="fas fa-sms"></i><br/>
                        <span className="d-md-block d-none">Verifica Contatti Sms</span>
                    </a>
                </div>
                <div className="text-center col-12 my-2">
                    <a href="/">
                        <i className="fab fa-whatsapp"></i><br/>
                        <span className="d-md-block d-none">Verifica Contatti WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>
    )
}