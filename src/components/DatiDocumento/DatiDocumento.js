import React, { useState } from 'react';
import './DatiDocumento.css';

const DatiDocumento = () => {
    const [isActiveTipo, setIsActiveTipo] = useState(false);
    const [isActiveDataEmiss, setIsActiveDataEmiss] = useState(false);
    const [isActiveNumero, setIsActiveNumero] = useState(false);
    const [isActiveComuneRes, setIsActiveComuneRes] = useState(false);
    const [isActiveEmissProv, setIsActiveEmissProv] = useState(false);
    const [isActiveEmissCom, setIsActiveEmissCom] = useState(false);
    const [isActiveDataScad, setIsActiveDataScad] = useState(false);
    const [isActiveRilasciato, setIsActiveRilasciato] = useState(false);

    const [Tipo, setTipo] = useState('');
    const [DataEmiss, setDataEmiss] = useState('');
    const [Numero, setNumero] = useState('');
    const [comuneRes, setComuneRes] = useState('');
    const [EmissProv, setEmissProv] = useState('');
    const [EmissCom, setEmissCom] = useState('');
    const [DataScad, setDataScad] = useState('');
    const [Rilasciato, setRilasciato] = useState('');

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
    
    const onChangeNumero = (value) => {
        setNumero(value);
        value !== '' ? setIsActiveNumero(true) : setIsActiveNumero(false);
    }
    return(
        <div className="dati-documento my-5">
            <h5 className="mb-4 border-bottom pb-2">Dati documento</h5>
            <form className="px-3">
            <div className="form-group row justify-content-between">
                <div className="col-md-6 col-12 mb-4 mb-md-1">
                    <select className="form-control" id="exampleFormControlSelect1" value={Tipo} onChange={(e) => onChangeTipo(e.target.value)} >
                            <option></option>
                            <option>Carta di identità</option>
                            <option>Passaporto</option>
                        </select>
                    <label className={isActiveTipo ? 'active' : ''}>Tipo di documento *</label>
                </div>
                <div className=" col-md-6 col-12 mb-3 mb-md-1">
                    <input type="text" className="form-control" value={Numero} onChange={(e) => onChangeNumero(e.target.value)} />
                    <label className={isActiveNumero ? 'active' : ''}>Numero documento *</label>
                </div>
            </div>
            <div className="form-group row justify-content-between">
                <div className=" col-md-6 col-12 mb-4 mb-md-1">
                    <input type="text" className="form-control" value={DataEmiss} onChange={(e) => onChangeDataEmiss(e.target.value)} />
                    <label className={isActiveDataEmiss ? 'active' : ''}>Data emissione *</label>
                </div>
                <div className="form-group col-md-6 col-12 mb-3 mb-md-1">
                    <select className="form-control" id="exampleFormControlSelect1" value={EmissProv} onChange={(e) => onChangeEmissProv(e.target.value)} >
                            <option></option>
                            <option>RM</option>
                            <option>VT</option>
                        </select>
                    <label className={isActiveEmissProv ? 'active' : ''}>Luogo di emissione (provincia) *</label>
                </div>
            </div>
            <div className="form-group row justify-content-between">
                <div className=" col-md-6 col-12 mb-4 mb-md-1">
                    <select className="form-control" id="exampleFormControlSelect1" value={EmissCom} onChange={(e) => onChangeEmissCom(e.target.value)} >
                            <option></option>
                            <option>RM</option>
                            <option>VT</option>
                    </select>
                    <label className={isActiveEmissCom ? 'active' : ''}>Luogo di emissione (comune) *</label>
                </div>
                <div className=" col-md-6 col-12 mb-3 mb-md-1">
                    <input type="text" className="form-control" value={DataScad} onChange={(e) => onChangeDataScad(e.target.value)} />
                    <label className={isActiveDataScad ? 'active' : ''}>Data di scadenza *</label>
                </div>
            </div>
            <div className="form-group row justify-content-between">
                <div className=" col-md-6 col-12 mb-4 mb-md-1">
                    <input type="text" className="form-control" value={Rilasciato} onChange={(e) => onChangeRilasciato(e.target.value)} />
                    <label className={isActiveRilasciato ? 'active' : ''}>Rilasciato da *</label>
                </div>
            </div>
            </form>
        </div>
    )
}

export default DatiDocumento;