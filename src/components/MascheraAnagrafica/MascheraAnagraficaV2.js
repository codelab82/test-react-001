import React from 'react';
import AsideDx from '../AsideDx/AsideDx';
import AsideDxV2 from '../AsideDx/AsideDxV2';
import DatiRichiedente from '../DatiRichiedente/DatiRichiedente';
import DatiRichiedenteV2 from '../DatiRichiedente/DatiRichiedenteV2';
import Header from '../Header/Header';
import HeaderV2 from '../Header/HeaderV2';
import NavBar from '../NavBar/NavBar';
import Pulsantiera from '../Pulsantiera/Pulsantiera';

const MascheraAnagraficaV2 = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                {/* <Pulsantiera /> */}
                <HeaderV2 />
                <div className="row justify-content-between mb-4">
                    <div className="col-lg-9 col-md-8 col-12" >
                        <DatiRichiedenteV2 />
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <AsideDxV2 />
                    </div>
                </div>
                {/* <Pulsantiera/>  */}
            </div>
        </>
    )
}

export default MascheraAnagraficaV2;