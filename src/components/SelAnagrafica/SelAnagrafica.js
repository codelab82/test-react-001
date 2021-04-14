import React from 'react';
import './SelAnagrafica.css';

const SelAnagrafica = () => {
    return (
        <>
            <div className="container">
                <h5 className="text-color border-bottom">Selezionare tipo di anagrafica</h5>
                <div className="row mt-5 justify-content-around">
                    <div className="card col-lg-3 col-md-7 col-9 mb-3">
                        <div className="card-body">
                            <i className="far fa-user mt-3"></i>
                            <h5 className="card-title mt-2">Privato</h5>
                        </div>
                        <div className="d-flex justify-content-end">
                           <button className="btn"><i className="fas fa-arrow-right"></i></button> 
                        </div>
                    </div>
                    <div className="card col-lg-3 col-md-7 col-9 mb-3">
                        <div className="card-body">
                            <i className="fas fa-briefcase mt-3"></i>
                            <h5 className="card-title mt-2">Ditta individuale</h5>
                        </div>
                        <div className="d-flex justify-content-end">
                           <button className="btn"><i className="fas fa-arrow-right"></i></button> 
                        </div>
                    </div>
                    <div className="card col-lg-3 col-md-7 col-9 mb-3">
                        <div className="card-body">
                            <i className="fas fa-industry mt-3"></i>
                            <h5 className="card-title mt-2">Società</h5>
                        </div>
                        <div className="d-flex justify-content-end">
                           <button className="btn"><i className="fas fa-arrow-right"></i></button> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelAnagrafica;