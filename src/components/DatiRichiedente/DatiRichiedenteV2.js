import React, { useState } from 'react';
import './DatiRichiedente.css';
import avatar from '../../images/avatar.png';
import SelVenditore from '../SelVenditore/SelVenditore';
import DatiAggiuntiviRichiedente from '../DatiAggiuntiviRichiedente/DatiAggiuntiviRichiedente';
import { PulsantieraRichiedente, PulsantieraContatti } from './PulsantieraRichiedente';

const DatiRichiedenteV2 = () => {

    const [isActiveCognome, setIsActiveCognome] = useState(false);
    const [isActiveNome, setIsActiveNome] = useState(false);
    const [isActiveData, setIsActiveData] = useState(false);
    const [isActiveCittadinanza, setIsActiveCittadinanza] = useState(false);
    const [isActiveProv, setIsActiveProv] = useState(false);
    const [isActiveComune, setIsActiveComune] = useState(false);
    const [isActiveCF, setIsActiveCF] = useState(false);
    const [isActiveCell, setIsActiveCell] = useState(false);
    const [isActiveEmail, setIsActiveEmail] = useState(false);
    const [isActiveSoggiorno, setIsActiveSoggiorno] = useState(false);
    const [isActiveSesso, setIsActiveSesso] = useState(false);

    const [cognome, setCognome] = useState('');
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [cittadinanza, setCittadinanza] = useState('');
    const [prov, setProv] = useState('');
    const [comune, setComune] = useState('');
    const [CF, setCF] = useState('');
    const [cell, setCell] = useState('');
    const [email, setEmail] = useState('');
    const [soggiorno, setSoggiorno] = useState('');
    const [sesso, setSesso] = useState('');

    const onChangeCognome = (value) => {
        setCognome(value);
        value !== '' ? setIsActiveCognome(true) : setIsActiveCognome(false);
    }

    const onChangeNome = (value) => {
        setNome(value);
        value !== '' ? setIsActiveNome(true) : setIsActiveNome(false);
    }
    const onChangeData = (value) => {
        setData(value);
        value !== '' ? setIsActiveData(true) : setIsActiveData(false);
    }
    const onChangeCittadinanza = (value) => {
        setCittadinanza(value);
        value !== '' ? setIsActiveCittadinanza(true) : setIsActiveCittadinanza(false);
    }
    const onChangeSoggiorno = (value) => {
        setSoggiorno(value);
        value !== '' ? setIsActiveSoggiorno(true) : setIsActiveSoggiorno(false);
    }
    const onChangeProv = (value) => {
        setProv(value);
        value !== '' ? setIsActiveProv(true) : setIsActiveProv(false);
    }
    const onChangeComune = (value) => {
        setComune(value);
        value !== '' ? setIsActiveComune(true) : setIsActiveComune(false);
    }
    const onChangeCF = (value) => {
        setCF(value);
        value !== '' ? setIsActiveCF(true) : setIsActiveCF(false);
    }
    const onChangeCell = (value) => {
        setCell(value);
        value !== '' ? setIsActiveCell(true) : setIsActiveCell(false);
    }
    const onChangeEmail = (value) => {
        setEmail(value);
        value !== '' ? setIsActiveEmail(true) : setIsActiveEmail(false);
    }
    const onChangeSesso = (value) => {
        setSesso(value);
        value !== '' ? setIsActiveSesso(true) : setIsActiveSesso(false);
    }

    return (
        <div className="dati-richiedente mt-5">
            <SelVenditore />
            <h5 className="mb-4 border-bottom pb-2 text-color">Dati del richiedente</h5>
            <form>
                <div className="row">
                    <div className="col-10">
                        <div className="form-group row justify-content-between">
                            <div className="col-md-6 col-12 mb-4 mb-md-1">
                                <input type="text" className="form-control" value={cognome} onChange={(e) => onChangeCognome(e.target.value)} />
                                <label className={isActiveCognome ? 'active' : ''}>Cognome *</label>
                            </div>
                            <div className=" col-md-6 col-12 mb-3 mb-md-1">
                                <input type="text" className="form-control" value={nome} onChange={(e) => onChangeNome(e.target.value)} />
                                <label className={isActiveNome ? 'active' : ''}>Nome *</label>
                            </div>
                        </div>
                        <div className="form-group row justify-content-between">
                            <div className=" col-md-6 col-12 mb-4 mb-md-1">
                                <input type="text" className="form-control" value={data} onChange={(e) => onChangeData(e.target.value)} />
                                <label className={isActiveData ? 'active' : ''}>Data di nascita *</label>
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3 mb-md-1">
                                <select className="form-control" id="exampleFormControlSelect1" value={sesso} onChange={(e) => onChangeSesso(e.target.value)} >
                                    <option></option>
                                    <option>Maschio</option>
                                    <option>Femmina</option>
                                </select>
                                <label className={isActiveSesso ? 'active' : ''}>Sesso *</label>
                            </div>
                        </div>
                        <div className="form-group row justify-content-between">
                            <div className=" col-md-6 col-12 mb-4 mb-md-1">
                                <input type="text" className="form-control" value={cittadinanza} onChange={(e) => onChangeCittadinanza(e.target.value)} />
                                <label className={isActiveCittadinanza ? 'active' : ''}>Cittadinanza *</label>
                            </div>
                            <div className=" col-md-6 col-12 mb-3 mb-md-1">
                                <input type="text" className="form-control" value={soggiorno} onChange={(e) => onChangeSoggiorno(e.target.value)} />
                                <label className={isActiveSoggiorno ? 'active' : ''}>Data scadenza soggiorno *</label>
                            </div>
                        </div>
                        <div className="form-group row justify-content-between">
                            <div className=" col-md-6 col-12 mb-4 mb-md-1">
                                <input type="text" className="form-control" value={prov} onChange={(e) => onChangeProv(e.target.value)} />
                                <label className={isActiveProv ? 'active' : ''}>Provincia di nascita *</label>
                            </div>
                            <div className=" col-md-6 col-12 mb-3 mb-md-1">
                                <input type="text" className="form-control" value={comune} onChange={(e) => onChangeComune(e.target.value)} />
                                <label className={isActiveComune ? 'active' : ''}>Comune di nascita *</label>
                            </div>
                        </div>
                        <div className="form-group row justify-content-between">
                            <div className=" col-md-6 col-12 mb-4 mb-md-1">
                                <input type="text" className="form-control" value={CF} onChange={(e) => onChangeCF(e.target.value)} />
                                <label className={isActiveCF ? 'active' : ''}>Codice Fiscale *</label>
                            </div>
                        </div>


                    </div>
                    <div className="col-2">
                        <PulsantieraRichiedente />
                    </div>

                </div><br className="d-md-block d-none" />

                <div className="row">
                    <div className="col-10">
                        <div className="row alert alert-primary align-items-center" role="alert">
                            <div className="col-12 text-center col-lg-1">
                                <i className="fas fa-info-circle"></i>
                            </div>
                            <div className="col-12 info-text col-lg-11">
                                <strong>Questi sono il numero e l'email validi e attivi per la presente proposta</strong><br />
                        E' fondamentale che i dati indicati siano corretti, perché solo così si potrà ricevere tutte le informazioni relative al suo contratto e le credenziali per accedere al Customer
                        Service Online</div>
                        </div>
                        <div className="form-group row justify-content-between">
                            <div className=" col-md-6 col-12 mb-4 mb-md-1">
                                <input type="text" className="form-control" value={cell} onChange={(e) => onChangeCell(e.target.value)} />
                                <label className={isActiveCell ? 'active' : ''}>Cellulare *</label>
                            </div>
                            <div className=" col-md-6 col-12">
                                <input type="text" className="form-control" value={email} onChange={(e) => onChangeEmail(e.target.value)} />
                                <label className={isActiveEmail ? 'active' : ''}>Email *</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <PulsantieraContatti />
                    </div>
                </div>

                <DatiAggiuntiviRichiedente />
                {/* <div className="form-group row mt-5">
                    <p className="font-weight-bold info-text">* campi obbligatori</p>
                </div>
                <div className="form-group row">
                    <img src={avatar} alt="avatar" className="avatar" />
                </div>
                <div className="form-group row justify-content-between">
                    <button className="btn btn-gray mr-3 col-md-12 mb-3 col-lg-4">SALVA PER DOPO</button>
                    <button className="btn btn-gray mr-3 col-md-12 mb-3 col-lg-3">INDIETRO</button>
                    <button className="btn btn-color px-4 col-md-12 mb-3 col-lg-3">AVANTI</button>
                </div> */}
            </form >
        </div>
    )
}

export default DatiRichiedenteV2;