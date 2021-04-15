import React, { useState } from 'react';
import './SelVenditore.css';

const SelVenditore = () => {
    const [isActiveAnagrafica, setIsActiveAnagrafica] = useState(false);
    const [isActiveVenditore, setIsActiveVenditore] = useState(false);

    const [anagrafica, setAnagrafica] = useState('');
    const [venditore, setVenditore] = useState('');

    const [selectedOption, setSelectedOption] = useState('option1')
    const [selectedOption2, setSelectedOption2] = useState('option3')

    const onChangeAnagrafica = (value) => {
        setAnagrafica(value);
        value !== '' ? setIsActiveAnagrafica(true) : setIsActiveAnagrafica(false);
    }

    const onChangeVenditore = (value) => {
        setVenditore(value);
        value !== '' ? setIsActiveVenditore(true) : setIsActiveVenditore(false);
    }

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
    }

    const handleOptionChange2 = (e) => {
        setSelectedOption2(e.target.value)
    }

    return (
        <div className="sel-venditore">
            <form>
                <div className="form-group row justify-content-between">
                    <div className=" col-md-6 col-12 mb-4 mb-md-1">
                        <select className="form-control" id="exampleFormControlSelect1" value={anagrafica} onChange={(e) => onChangeAnagrafica(e.target.value)} >
                            <option></option>
                            <option>Privato</option>
                            <option>Ditta individuale</option>
                            <option>Società</option>
                        </select>
                        <label className={isActiveAnagrafica ? 'active' : ''}>Tipo anagrafica *</label>
                    </div>
                    <div className="form-group col-md-6 col-12 mb-3 mb-md-1">
                        <input type="text" className="form-control" value={venditore} onChange={(e) => onChangeVenditore(e.target.value)} />
                        <label className={isActiveVenditore ? 'active' : ''}>Venditore *</label>
                    </div>
                </div><br className="d-md-block d-none" />
                <div className="form-group row justify-content-between">
                    <div className="col-md-6 col-12 mb-4 mb-md-1">
                        <label>Tipo vendita *</label>
                        <div className=" row justify-content-start">
                            <div className="form-check">
                                <label>
                                    <input type="radio" value="option1" checked={selectedOption === 'option1'}
                                        onChange={handleOptionChange}
                                    />
                            In salone
                        </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <input type="radio" value="option2" checked={selectedOption === 'option2'}
                                        onChange={handleOptionChange}
                                    />
                            A distanza
                            </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 mb-3 mb-md-1">
                        <label>Canale vendita vettura*</label>
                        <div className=" row justify-content-start">
                            <div className="form-check">
                                <label>
                                    <input type="radio" value="option3" checked={selectedOption2 === 'option3'}
                                        onChange={handleOptionChange2}
                                    />
                            In salone
                        </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <input type="radio" value="option4" checked={selectedOption2 === 'option4'}
                                        onChange={handleOptionChange2}
                                    />
                            A distanza
                        </label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default SelVenditore;