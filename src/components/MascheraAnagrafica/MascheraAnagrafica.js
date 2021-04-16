import React from 'react';
import AsideDx from '../AsideDx/AsideDx';
import DatiRichiedente from '../DatiRichiedente/DatiRichiedente';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Pulsantiera from '../Pulsantiera/Pulsantiera';

const MascheraAnagrafica = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <Pulsantiera />
                <Header />
                <div className="row justify-content-between">
                    <div className="col-lg-8 col-md-8 col-12" >
                        <DatiRichiedente />
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <AsideDx />
                    </div>
                </div>
                {/* <Pulsantiera/>  */}
            </div>
        </>
    )
}

export default MascheraAnagrafica;