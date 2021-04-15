import React, { useState } from 'react';
import './DatiAggiuntiviRichiedente.css';

const DatiAggiuntiviRichiedente = () => {

    const [isActiveVia, setIsActiveVia] = useState(false);
    const [isActiveCivico, setIsActiveCivico] = useState(false);
    const [isActiveProvRes, setIsActiveProvRes] = useState(false);
    const [isActiveCAP, setIsActiveCAP] = useState(false);
    const [isActiveProv, setIsActiveProv] = useState(false);
    const [isActiveComune, setIsActiveComune] = useState(false);
    const [isActiveCF, setIsActiveCF] = useState(false);
    const [isActiveTipo, setIsActiveTipo] = useState(false);
    const [isActiveDataEmiss, setIsActiveDataEmiss] = useState(false);
    const [isActiveNumero, setIsActiveNumero] = useState(false);
    const [isActiveComuneRes, setIsActiveComuneRes] = useState(false);
    const [isActiveEmissProv, setIsActiveEmissProv] = useState(false);
    const [isActiveEmissCom, setIsActiveEmissCom] = useState(false);
    const [isActiveDataScad, setIsActiveDataScad] = useState(false);
    const [isActiveRilasciato, setIsActiveRilasciato] = useState(false);

    const [via, setVia] = useState('');
    const [civico, setCivico] = useState('');
    const [provRes, setProvRes] = useState('');
    const [CAP, setCAP] = useState('');
    const [prov, setProv] = useState('');
    const [comune, setComune] = useState('');
    const [CF, setCF] = useState('');
    const [Tipo, setTipo] = useState('');
    const [DataEmiss, setDataEmiss] = useState('');
    const [Numero, setNumero] = useState('');
    const [comuneRes, setComuneRes] = useState('');
    const [EmissProv, setEmissProv] = useState('');
    const [EmissCom, setEmissCom] = useState('');
    const [DataScad, setDataScad] = useState('');
    const [Rilasciato, setRilasciato] = useState('');

    const onChangeVia = (value) => {
        setVia(value);
        value !== '' ? setIsActiveVia(true) : setIsActiveVia(false);
    }

    const onChangeCivico = (value) => {
        setCivico(value);
        value !== '' ? setIsActiveCivico(true) : setIsActiveCivico(false);
    }
    const onChangeProvRes = (value) => {
        setProvRes(value);
        value !== '' ? setIsActiveProvRes(true) : setIsActiveProvRes(false);
    }
    const onChangeComuneRes = (value) => {
        setComuneRes(value);
        value !== '' ? setIsActiveComuneRes(true) : setIsActiveComuneRes(false);
    }
    const onChangeCAP = (value) => {
        setCAP(value);
        value !== '' ? setIsActiveCAP(true) : setIsActiveCAP(false);
    }
    const onChangeNumero = (value) => {
        setNumero(value);
        value !== '' ? setIsActiveNumero(true) : setIsActiveNumero(false);
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
    const onChangeTipo = (value) => {
        setTipo(value);
        value !== '' ? setIsActiveTipo(true) : setIsActiveTipo(false);
    }
    const onChangeDataEmiss = (value) => {
        setDataEmiss(value);
        value !== '' ? setIsActiveDataEmiss(true) : setIsActiveDataEmiss(false);
    }
    const onChangeEmissProv = (value) => {
        setEmissProv(value);
        value !== '' ? setIsActiveEmissProv(true) : setIsActiveEmissProv(false);
    }
    const onChangeEmissCom = (value) => {
        setEmissCom(value);
        value !== '' ? setIsActiveEmissCom(true) : setIsActiveEmissCom(false);
    }
    const onChangeDataScad = (value) => {
        setDataScad(value);
        value !== '' ? setIsActiveDataScad(true) : setIsActiveDataScad(false);
    }
    const onChangeRilasciato = (value) => {
        setRilasciato(value);
        value !== '' ? setIsActiveRilasciato(true) : setIsActiveRilasciato(false);
    }

    return (
        <div className="dati-aggiuntivi-richiedente mt-5">
            <h5 className="mb-4 border-bottom pb-2 text-color">Dati aggiuntivi del richiedente</h5>
            <div className="row justify-content-center">
                <hr className="border col"/>
                <p className="col text-center">Residenza / Sede legale</p>
                <hr className="border col"/>
            </div>
            <div className="row alert alert-primary align-items-center" role="alert">
                <div className="col-12 text-center col-lg-1">
                    <i className="fas fa-info-circle"></i>
                </div>
                <div className="col-12 info-text col-lg-11">
                    <strong>La provincia ed il CAP non possono essere modificati in seguito alla selezione del servizio Furto e Incendio</strong><br />
                </div>
            </div><br className="d-md-block d-none" />
            <div className="form-group row justify-content-between">
                <div className="col-md-6 col-12 mb-4 mb-md-1">
                    <input type="text" className="form-control" value={via} onChange={(e) => onChangeVia(e.target.value)} />
                    <label className={isActiveVia ? 'active' : ''}>Via *</label>
                </div>
                <div className=" col-md-6 col-12 mb-3 mb-md-1">
                    <input type="text" className="form-control" value={civico} onChange={(e) => onChangeCivico(e.target.value)} />
                    <label className={isActiveCivico ? 'active' : ''}>Civico *</label>
                </div>
            </div><br className="d-md-block d-none" />
            <div className="form-group row justify-content-between">
                <div className=" col-md-6 col-12 mb-4 mb-md-1">
                    <input type="text" className="form-control" value={provRes} onChange={(e) => onChangeProvRes(e.target.value)} />
                    <label className={isActiveProvRes ? 'active' : ''}>Provincia di residenza *</label>
                </div>
                <div className="form-group col-md-6 col-12 mb-3 mb-md-1">
                    <input type="text" className="form-control" value={comuneRes} onChange={(e) => onChangeComuneRes(e.target.value)} />
                    <label className={isActiveComuneRes ? 'active' : ''}>Comune di residenza *</label>
                </div>
            </div><br className="d-md-block d-none" />
            <div className="form-group row justify-content-between">
                <div className=" col-md-6 col-12 mb-4 mb-md-1">
                    <input type="text" className="form-control" value={CAP} onChange={(e) => onChangeCAP(e.target.value)} />
                    <label className={isActiveCAP ? 'active' : ''}>CAP *</label>
                </div>
                <div className=" col-md-6 col-12 mb-3 mb-md-1">
                    <input type="text" className="form-control" value={prov} onChange={(e) => onChangeProv(e.target.value)} />
                    <label className={isActiveProv ? 'active' : ''}>Provincia di nascita *</label>
                </div>
            </div><br className="d-md-block d-none" />
            <div className="form-group row justify-content-between">
                <div className=" col-md-6 col-12 mb-4 mb-md-1">
                    <input type="text" className="form-control" value={comune} onChange={(e) => onChangeComune(e.target.value)} />
                    <label className={isActiveComune ? 'active' : ''}>Comune di nascita *</label>
                </div>
                <div className=" col-md-6 col-12 mb-3 mb-md-1">
                   <input type="text" className="form-control" value={CF} onChange={(e) => onChangeCF(e.target.value)} />
                    <label className={isActiveCF ? 'active' : ''}>Codice Fiscale *</label> 
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <hr className="border col"/>
                <p className="col text-center">Documento</p>
                <hr className="border col"/>
            </div>
            <div className="form-group row justify-content-between">
                <div className="col-md-6 col-12 mb-4 mb-md-1">
                    <input type="text" className="form-control" value={Tipo} onChange={(e) => onChangeTipo(e.target.value)} />
                    <label className={isActiveTipo ? 'active' : ''}>Tipo di documento *</label>
                </div>
                <div className=" col-md-6 col-12 mb-3 mb-md-1">
                    <input type="text" className="form-control" value={Numero} onChange={(e) => onChangeNumero(e.target.value)} />
                    <label className={isActiveNumero ? 'active' : ''}>Numero documento *</label>
                </div>
            </div><br className="d-md-block d-none" />
            <div className="form-group row justify-content-between">
                <div className=" col-md-6 col-12 mb-4 mb-md-1">
                    <input type="text" className="form-control" value={DataEmiss} onChange={(e) => onChangeDataEmiss(e.target.value)} />
                    <label className={isActiveDataEmiss ? 'active' : ''}>Data emissione *</label>
                </div>
                <div className="form-group col-md-6 col-12 mb-3 mb-md-1">
                    <input type="text" className="form-control" value={EmissProv} onChange={(e) => onChangeEmissProv(e.target.value)} />
                    <label className={isActiveEmissProv ? 'active' : ''}>Luogo di emissione (provincia) *</label>
                </div>
            </div><br className="d-md-block d-none" />
            <div className="form-group row justify-content-between">
                <div className=" col-md-6 col-12 mb-4 mb-md-1">
                    <input type="text" className="form-control" value={EmissCom} onChange={(e) => onChangeEmissCom(e.target.value)} />
                    <label className={isActiveEmissCom ? 'active' : ''}>Luogo di emissione (comune) *</label>
                </div>
                <div className=" col-md-6 col-12 mb-3 mb-md-1">
                    <input type="text" className="form-control" value={DataScad} onChange={(e) => onChangeDataScad(e.target.value)} />
                    <label className={isActiveDataScad ? 'active' : ''}>Data di scadenza *</label>
                </div>
            </div><br className="d-md-block d-none" />
            <div className="form-group row justify-content-between">
                <div className=" col-md-6 col-12 mb-4 mb-md-1">
                    <input type="text" className="form-control" value={Rilasciato} onChange={(e) => onChangeRilasciato(e.target.value)} />
                    <label className={isActiveRilasciato ? 'active' : ''}>Rilasciato da *</label>
                </div>
            </div>
        </div >
    )
}

export default DatiAggiuntiviRichiedente;