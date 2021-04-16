import React from 'react';
import './CaricamentoDocumenti.css';

const CaricamentoDocumenti = () => {
    return (
        <div className="caricamento-documenti mt-3 border">
            <h5 className="p-3"> Caricamento documenti</h5>
            <p className="pl-3"><strong>Documenti di identità</strong></p>

            <div className="accordion mb-3" id="accordionExample">
                <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between" id="headingOne">
                        <div className="d-flex">
                            <h2 className="mb-0">
                                <div className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <i className="fas fa-chevron-up"></i><span className="ml-2">Carta di identità</span>
                                </div>
                            </h2>
                            <button className="btn btn-small btn-sm">conferma</button>
                        </div>
                        <div>
                            <i className="fas fa-info-circle mr-3"></i>
                            <i className="fas fa-download mr-3"></i>
                            <i className="far fa-trash-alt" style={{color:'#2e8eae'}}></i>
                        </div>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-8">
                                    <div className="row justify-content-between align-items-baseline">
                                        <p className="card-text pl-4 pb-3">
                                            <i className="fas fa-check" style={{ color: '#D1DCEB' }}></i>&nbsp;
                                <span>carta-identità-fronte.jpg</span>&nbsp;&nbsp;&nbsp;
                                <i className="far fa-image" style={{ color: '#2e8eae', cursor: 'pointer' }}></i>&nbsp;&nbsp;
                                <i className="far fa-trash-alt" style={{ color: '#2e8eae', cursor: 'pointer' }}></i>&nbsp;&nbsp;
                                <select className="form-control mr-3" id="exampleFormControlSelect1">
                                                <option>Tipo di file</option>
                                                <option selected>fronte</option>
                                                <option>retro</option>
                                                <option>fronte-retro</option>
                                            </select>
                                        </p>
                                    </div>
                                    <div className="row justify-content-between align-items-baseline">
                                        <p className="card-text pl-4">
                                            <i className="fas fa-check" style={{ color: '#D1DCEB' }}></i>&nbsp;
                                <span>carta-identità-retro.jpg</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <i className="far fa-image" style={{ color: '#2e8eae', cursor: 'pointer' }}></i>&nbsp;&nbsp;
                                <i className="far fa-trash-alt" style={{ color: '#2e8eae', cursor: 'pointer' }}></i>&nbsp;&nbsp;
                                <select className="form-control mr-3" id="exampleFormControlSelect1">
                                                <option>Tipo di file</option>
                                                <option>fronte</option>
                                                <option selected>retro</option>
                                                <option>fronte-retro</option>
                                            </select>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3 text-center mr-3">
                                    <i className="fas fa-cloud-upload-alt" style={{ color: '#2e8eae', fontSize: '2em' }}></i><br />
                                    <span className="trascina">TRASCINA QUI IL TUO FILE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion mb-3" id="accordionExample2">
                <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between" id="headingTwo">
                        <div className="d-flex">
                            <h2 className="mb-0">
                                <div className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                <i className="fas fa-chevron-down"></i><span className="ml-2">Passaporto</span>
                                </div>
                            </h2>
                            <button className="btn btn-small btn-sm">conferma</button>
                        </div>
                        <div>
                            <i className="fas fa-info-circle mr-3"></i>
                            <i className="fas fa-download mr-3"></i>
                            <i className="far fa-trash-alt"></i>
                        </div>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample2">
                        <div className="card-body">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-8">
                                    <div className="row justify-content-between">
                                        <p className="card-text pl-4">
                                            <i className="fas fa-check" style={{ color: '#D1DCEB' }}></i>&nbsp;
                                            <span>passaporto-fronte.jpg</span>&nbsp;&nbsp;&nbsp;
                                        </p>
                                    </div>
                                    <div className="row justify-content-between">
                                        <p className="card-text pl-4">
                                            <i className="fas fa-check" style={{ color: '#D1DCEB' }}></i>&nbsp;
                                            <span>passaporto-retro.jpg</span>
                                        </p>
                                    </div>
                                    <div className="row justify-content-between">
                                        <p className="card-text pl-4 pb-3">
                                            <i className="fas fa-check" style={{ color: '#D1DCEB' }}></i>&nbsp;
                                            <span>passaporto.jpg</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3 text-center mr-3">
                                    <i className="fas fa-cloud-upload-alt" style={{ color: '#2e8eae', fontSize: '2em' }}></i><br />
                                    <span className="trascina">TRASCINA QUI IL TUO FILE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion mb-3" id="accordionExample3">
                <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between" id="headingThree">
                        <div className="d-flex">
                            <h2 className="mb-0">
                                <div className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                <i className="fas fa-chevron-down"></i><span className="ml-2">Patente</span>
                                </div>
                            </h2>
                            <button className="btn btn-small btn-sm">conferma</button>
                        </div>
                        <div>
                            <i className="fas fa-info-circle mr-3"></i>
                            <i className="fas fa-download mr-3"></i>
                            <i className="far fa-trash-alt"></i>
                        </div>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample3">
                        <div className="card-body">
                        <div className="row justify-content-between align-items-center">
                    <div className="col-8">
                        <div className="row justify-content-between">
                            <p className="card-text pl-4 pt-3">
                                <i className="fas fa-check" style={{ color: '#D1DCEB' }}></i>&nbsp;
                                <span>patente-fronte.jpg</span>&nbsp;&nbsp;&nbsp;
                            </p>
                        </div>
                        <div className="row justify-content-between">
                            <p className="card-text pl-4">
                                <i className="fas fa-check" style={{ color: '#D1DCEB' }}></i>&nbsp;
                        <span>patente-retro.jpg</span>
                            </p>
                        </div>
                        <div className="row justify-content-between">
                            <p className="card-text pl-4">
                                <i className="fas fa-check" style={{ color: '#D1DCEB' }}></i>&nbsp;
                        <span>patente.jpg</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-3 text-center mr-3">
                        <i className="fas fa-cloud-upload-alt" style={{ color: '#2e8eae', fontSize: '2em' }}></i><br />
                        <span className="trascina">TRASCINA QUI IL TUO FILE</span>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion" id="accordionExample4">
                <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between" id="headingFour">
                    <div className="d-flex">
                        <h2 className="mb-0">
                            <div className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                            <i className="fas fa-chevron-up"></i><span className="ml-2">Tessera sanitaria</span>
                            </div>
                        </h2>
                        <button className="btn btn-small btn-sm" style={{backgroundColor:'#D1DCEB', color:'#BEBEBE'}}>conferma</button>
                        </div>
                        <div>
                            <i className="fas fa-info-circle mr-3"></i>
                            <i className="fas fa-download mr-3" style={{color:'#2e8eae'}}></i>
                            <i className="far fa-trash-alt" style={{color:'#2e8eae'}}></i>
                        </div>
                    </div>
                    <div id="collapseFour" className="collapse show" aria-labelledby="headingFour" data-parent="#accordionExample4">
                        <div className="card-body">
                        <div className="row justify-content-between align-items-center">
                    <div className="col-8">
                        <div className="row justify-content-between align-items-baseline">
                            <p className="card-text pl-4 pt-3">
                                <i className="fas fa-check" style={{ color: '#81CE33' }}></i>&nbsp;
                                <span>tessera-sanitaria-retro.jpg</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <i className="far fa-image" style={{ color: '#2e8eae', cursor: 'pointer' }}></i>&nbsp;&nbsp;
                                <i className="far fa-trash-alt" style={{ color: '#2e8eae', cursor: 'pointer' }}></i>&nbsp;&nbsp;
                                <select className="form-control mr-3" id="exampleFormControlSelect1" readOnly>
                                    <option>Tipo di file</option>
                                    <option>fronte</option>
                                    <option selected>retro</option>
                                    <option>fronte-retro</option>
                                </select>
                            </p>
                        </div>
                    </div>
                    <div className="col-3 text-center mr-3">
                        <i className="fas fa-cloud-upload-alt" style={{ color: '#2e8eae', fontSize: '2em' }}></i><br />
                        <span className="trascina">TRASCINA QUI IL TUO FILE</span>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-end my-3 mr-4">
                <button className="btn btn-color">COMPLETA OPERAZIONE</button>
            </div>
        </div >
    )
};

export default CaricamentoDocumenti;