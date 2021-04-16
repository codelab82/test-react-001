import React from 'react';
import './AsideDx.css';
import macchina from '../../images/macchina.png';
import icona from '../../images/icona.png';
import PAYPERDRYVE from '../../images/PAYPERDRIVE.png';
import { PulsantieraMaschera, PulsantieraMascheraV2 } from '../Pulsantiera/PulsantieraMaschera';

const AsideDxV2 = () => {
    return (
        <>
        <div className="border p-3 aside d-md-block d-none">
            <div className="row box">
                <img src={PAYPERDRYVE} alt="logo" className="logo-payperdrive"/>
                <h5 className="ml-3">Toyota Yaris Hybrid</h5>
                <img src={macchina} alt="macchina" className="img" />
            </div>
            {/* <div className="row">
                <p className="user-info mt-3 ml-3">
                    <i className="far fa-user" style={{fontSize: '1.3em'}}></i>&nbsp;&nbsp;
                    <strong>Alfredo Porti</strong><br/>
                    Proposta numero: <strong>36588741</strong>
                </p>
            </div> */}
            <div className="row">
                <p className="ml-3 info-text">
                    Prezzo: <strong>15.000,00 €</strong><br />
                    Anticipo: <strong>2.000,00 €</strong><br />
                    <strong>47 </strong> rate da <strong>254,00 €</strong><br />
                    Rata Finale: <strong>9.401,00 €</strong><br />
                    <strong>TAN 8,99% - TAEG 10,87%</strong>
                </p>
            </div>
            <div className="row">
                <p className="ml-3 info-text">
                    <i className="fas fa-fire-alt mb-2" style={{ color: '#2e8eae' }}></i>&nbsp;&nbsp;
                    Furto Incendio (Pacchetto Blu)<br />
                    <i className="fas fa-unlock-alt mb-2" style={{ color: '#2e8eae' }}></i>&nbsp;&nbsp;
                    Securmark 8<br />
                    <i className="fas fa-unlock-alt" style={{ color: '#D1DCEB' }}></i>&nbsp;&nbsp;
                    <span style={{ color: '#D1DCEB' }}>Protezione Persona</span>
                </p>
            </div>
            {/* <div className="row justify-content-center">
                <button type="button" className="btn btn-gray">SWITCH DEVICE</button>
            </div>
            <div className="row my-4">
                <img src={icona} alt="icona" className="icona" />
            </div>
            <div className="row">
                <p className="help-text ml-3 mb-3"><strong>Hai bisogno di assistenza?</strong><br />
                    <i className="fas fa-phone"></i>&nbsp;&nbsp;
                    <span style={{color: '#707070'}}>06 505 249 23</span>
                </p>
            </div> */}
        </div>
        <div className="p-3 aside d-md-block d-none">
            <PulsantieraMascheraV2 />
        </div>
        </>
    )
}

export default AsideDxV2;