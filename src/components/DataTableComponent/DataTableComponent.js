import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { data } from "./data";
import './DataTableComponent.css';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

const DataTableComponent = () => {

    const   [hideTipo, setHideTipo] = useState(false),
            [hideNumero, setHideNumero] = useState(false),
            [hideBrand, setHideBrand] = useState(true),
            [hideConvenzione, setHideConvenzione] = useState(false),
            [hideCodice, setHideCodice] = useState(true),
            [hideNomeProdotto, setHideNomeProdotto] = useState(false),
            [hideStatoPratica, setHideStatoPratica] = useState(true),
            [hideScadenza, setHideScadenza] = useState(true),
            [hideLiquidazione, setHideLiquidazione] = useState(true),
            [hideInScadenza, setHideInScadenza] = useState(true),
            [hideTCM, setHideTCM] = useState(true),

            [hideNome, setHideNome] = useState(false),
            [hideCognome, setHideCognome] = useState(false),
            [hideDenominazione, setHideDenominazione] = useState(false),
            [hideCF, setHideCF] = useState(true),
            [hidePIVA, setHidePIVA] = useState(true),

            [hideMarca, setHideMarca] = useState(true),
            [hideModello, setHideModello] = useState(true),
            [hideCilindrata, setHideCilindrata] = useState(true),
            [hideTarga, setHideTarga] = useState(true),
            [hideTelaio, setHideTelaio] = useState(true),
            [hideStatoVettura, setHideStatoVettura] = useState(true),

            [hideRate, setHideRate] = useState(true),
            [hideFinanziato, setHideFinanziato] = useState(true),
            [hideAcconto, setHideAcconto] = useState(true),
            [hideRataFinale, setHideRataFinale] = useState(true);


    const columns = [
        {
            name: 'Tipo',
            selector: 'ocs_type',
            sortable: true,
            omit: hideTipo
        },
        {
            name: 'Numero',
            selector: 'id',
            sortable: true,
            omit: hideNumero
        },
        {
            name: 'Brand',
            selector: 'brand_id.id',
            sortable: true,
            omit: hideBrand
        },        
        {
            name: 'Convenzione',
            selector: 'agreement_id.code',
            sortable: true,
            omit: hideConvenzione
        },
        {
            name: 'Codice Prodotto',
            selector: 'product_id.product_type_id.code',
            sortable: true,
            omit: hideCodice
        },
        {
            name: 'Nome Prodotto',
            selector: 'product_id.name',
            sortable: true,
            omit: hideNomeProdotto
        },
        {
            name: 'Stato Pratica',
            selector: 'cwf_id',
            sortable: true,
            omit: hideStatoPratica
        },
        {
            name: 'Scadenza',
            selector: 'data_scadenza',
            sortable: true,
            omit: hideScadenza
        },
        {
            name: 'Liquidazione',
            selector: 'offerdetail.data_liquidazione',
            sortable: true,
            omit: hideLiquidazione
        },
        {
            name: 'In Scadenza',
            selector: 'is_tcm',
            sortable: true,
            omit: hideInScadenza
        },
        {
            name: 'TCM SI/NO',
            selector: 'product_id.product_type_id.is_tcm',
            sortable: true,
            omit: hideTCM
        },
        {
            name: 'Nome',
            selector: 'customer_id.registry[0].nome',
            sortable: true,
            omit: hideNome
        },
        {
            name: 'Cognome',
            selector: 'customer_id.registry[0].cognome',
            sortable: true,
            omit: hideCognome
        },
        {
            name: 'Denominazione',
            selector: 'customer_id.registry[0].denominazione',
            sortable: true,
            omit: hideDenominazione
        },
        {
            name: 'Codice Fiscale',
            selector: 'customer_id.registry[0].codice_fiscale',
            sortable: true,
            omit: hideCF
        },
        {
            name: 'Partita Iva',
            selector: 'customer_id.registry[0].partita_iva',
            sortable: true,
            omit: hidePIVA
        },
        {
            name: 'Marca',
            selector: 'car_id.car_type_id.name',
            sortable: true,
            omit: hideMarca
        },
        {
            name: 'Modello',
            selector:'car_id.name',
            sortable: true,
            omit: hideModello
        },
        {
            name: 'Cilindrata',
            selector:'car_id.displacement',
            sortable: true,
            omit: hideCilindrata
        },
        {
            name: 'Targa',
            selector:'targa',
            sortable: true,
            omit: hideTarga
        },
        {
            name: 'Telaio',
            selector:'telaio',
            sortable: true,
            omit: hideTelaio
        },
        {
            name: 'Stato Vettura',
            selector:'stato_auto',
            sortable: true,
            omit: hideStatoVettura
        },
        {
            name: 'Rate',
            selector:'offerdetail.numero_rate',
            sortable: true,
            omit: hideRate
        },
        {
            name: 'Finanziato',
            selector:'finanziato_totale',
            sortable: true,
            omit: hideFinanziato
        },
        {
            name: 'Acconto',
            selector:'acconto',
            sortable: true,
            omit: hideAcconto
        },
        {
            name: 'Rata Finale',
            selector:'maxirata',
            sortable: true,
            omit: hideRataFinale
        },
    ];

    const tableData = {
        columns,
        data,
        print: false
    };

    const ExpandableComponent = ({ data }) => <div className="plot">{data.car_id.car_type_id.name} - {data.car_id.name}</div>

    const contextMessage = {
        singular: 'elemento selezionato',
        plural: 'elementi selezionati',

    };

    const paginationComponentOptions = {
        rowsPerPageText: 'Righe per pagina.',
        rangeSeparatorText: 'di',
        noRowsPerPage: false,
        selectAllRowsItem: false,
        selectAllRowsItemText: 'Tutte'
    };

    const expandableIcon = {
        collapsed: <i className="fas fa-chevron-right" style={{ color: '#288EAF', fontSize: '1.5em', margin: '0 auto' }}></i>,
        expanded: <i className="fas fa-chevron-down" style={{ color: '#288EAF', fontSize: '1.5em', margin: '0 auto' }}></i>
    }

    return (
        <div className="container">
            <DataTableExtensions {...tableData}>
                <DataTable
                    id="language"
                    className="table"
                    title="Proposte"
                    columns={columns}
                    data={data}
                    pagination
                    expandableRows
                    expandableRowsComponent={<ExpandableComponent />}
                    expandableIcon={expandableIcon}
                    selectableRows
                    contextMessage={contextMessage}
                    paginationComponentOptions={paginationComponentOptions}
                />
            </DataTableExtensions>
            <div>
                <div className="conf-col">
                    <h3>Configuarazione colonne</h3>
                </div>
                <div className="flex-row">
                    <div className="pratica-col">
                        <h3>Pratica</h3>
                        <div className="btn" onClick={() => setHideTipo(!hideTipo)}>Tipo</div>
                        <div className="btn" onClick={() => setHideNumero(!hideNumero)}>Numero</div>
                        <div className="btn" onClick={() => setHideBrand(!hideBrand)}>Brand</div>
                        <div className="btn" onClick={() => setHideConvenzione(!hideConvenzione)}>Convenzione</div>
                        <div className="btn" onClick={() => setHideCodice(!hideCodice)}>Codice Prodotto</div>
                        <div className="btn" onClick={() => setHideNomeProdotto(!hideNomeProdotto)}>Nome Prodotto</div>
                        <div className="btn" onClick={() => setHideStatoPratica(!hideStatoPratica)}>Stato Pratica</div>
                        <div className="btn" onClick={() => setHideScadenza(!hideScadenza)}>Scadenza</div>
                        <div className="btn" onClick={() => setHideLiquidazione(!hideLiquidazione)}>Liquidazione</div>
                        <div className="btn" onClick={() => setHideInScadenza(!hideInScadenza)}>In Scadenza</div>
                        <div className="btn" onClick={() => setHideTCM(!hideTCM)}>TCM SI/NO</div>
                    </div>
                    <div className="cliente-col">
                        <h3>Cliente</h3>
                        <div className="btn" onClick={() => setHideNome(!hideNome)}>Nome</div>
                        <div className="btn" onClick={() => setHideCognome(!hideCognome)}>Cognome</div>
                        <div className="btn" onClick={() => setHideDenominazione(!hideDenominazione)}>Denominazione</div>
                        <div className="btn" onClick={() => setHideCF(!hideCF)}>Codice Fiscale</div>
                        <div className="btn" onClick={() => setHidePIVA(!hidePIVA)}>Partita Iva</div>
                    </div>
                    <div className="vettura-col">
                        <h3>Vettura</h3>
                        <div className="btn" onClick={() => setHideMarca(!hideMarca)}>Marca</div>
                        <div className="btn" onClick={() => setHideModello(!hideModello)}>Modello</div>
                        <div className="btn" onClick={() => setHideCilindrata(!hideCilindrata)}>Cilindrata</div>
                        <div className="btn" onClick={() => setHideTarga(!hideTarga)}>Targa</div>
                        <div className="btn" onClick={() => setHideTelaio(!hideTelaio)}>Telaio</div>
                        <div className="btn" onClick={() => setHideStatoVettura(!hideStatoVettura)}>Stato Vettura</div>
                    </div>
                    <div className="finanziamento-col">
                        <h3>Finanziamento</h3>
                        <div className="btn" onClick={() => setHideRate(!hideRate)}>Rate</div>
                        <div className="btn" onClick={() => setHideFinanziato(!hideFinanziato)}>Finanaziato</div>
                        <div className="btn" onClick={() => setHideAcconto(!hideAcconto)}>Acconto</div>
                        <div className="btn" onClick={() => setHideRataFinale(!hideRataFinale)}>Rata Finale</div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DataTableComponent;