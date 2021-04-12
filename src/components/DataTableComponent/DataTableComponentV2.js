import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { data } from "./data";
import './DataTableComponent.css';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import {statoPraticaLabels} from './utils'

export default DataTableComponentV2 = () => {

    const   [showTipo, setShowTipo] = useState(true),
            [showNumero, setShowNumero] = useState(true),
            [showBrand, setShowBrand] = useState(false),
            [showConvenzione, setShowConvenzione] = useState(true),
            [showCodice, setShowCodice] = useState(false),
            [showNomeProdotto, setShowNomeProdotto] = useState(true),
            [showStatoPratica, setShowStatoPratica] = useState(false),
            [showScadenza, setShowScadenza] = useState(false),
            [showLiquidazione, setShowLiquidazione] = useState(false),
            [showInScadenza, setShowInScadenza] = useState(false),
            [showTCM, setShowTCM] = useState(false),

            [showNome, setShowNome] = useState(true),
            [showCognome, setShowCognome] = useState(true),
            [showDenominazione, setShowDenominazione] = useState(true),
            [showCF, setShowCF] = useState(false),
            [showPIVA, setShowPIVA] = useState(false),

            [showMarca, setShowMarca] = useState(false),
            [showModello, setShowModello] = useState(false),
            [showCilindrata, setShowCilindrata] = useState(false),
            [showTarga, setShowTarga] = useState(false),
            [showTelaio, setShowTelaio] = useState(false),
            [showStatoVettura, setShowStatoVettura] = useState(false),

            [showRate, setShowRate] = useState(false),
            [showFinanziato, setShowFinanziato] = useState(false),
            [showAcconto, setShowAcconto] = useState(false),
            [showRataFinale, setShowRataFinale] = useState(false);


    const columns = [
        {
            name: 'Tipo',
            selector: 'ocs_type',
            sortable: true,
            omit: !showTipo
        },
        {
            name: 'Numero',
            selector: 'id',
            sortable: true,
            omit: !showNumero
        },
        {
            name: 'Brand',
            selector: 'brand_id.id',
            sortable: true,
            omit: !showBrand
        },        
        {
            name: 'Convenzione',
            selector: 'agreement_id.code',
            sortable: true,
            omit: !showConvenzione
        },
        {
            name: 'Codice Prodotto',
            selector: 'product_id.product_type_id.code',
            sortable: true,
            omit: !showCodice
        },
        {
            name: 'Nome Prodotto',
            selector: 'product_id.name',
            sortable: true,
            omit: !showNomeProdotto
        },
        {
            name: 'Stato Pratica',
            selector: (row, index) => { return getStatoPraticaLabel(row.cwf_id); },
            cellExport: (row) => { return getStatoPraticaLabel(row.cwf_id); },
            sortable: true,
            omit: !showStatoPratica
        },
        {
            name: 'Scadenza',
            selector: 'data_scadenza',
            sortable: true,
            omit: !showScadenza
        },
        {
            name: 'Liquidazione',
            selector: 'offerdetail.data_liquidazione',
            sortable: true,
            omit: !showLiquidazione
        },
        {
            name: 'In Scadenza',
            selector: 'is_tcm',
            sortable: true,
            omit: !showInScadenza
        },
        {
            name: 'TCM SI/NO',
            selector: 'product_id.product_type_id.is_tcm',
            sortable: true,
            omit: !showTCM
        },
        {
            name: 'Nome',
            selector: 'customer_id.registry[0].nome',
            sortable: true,
            omit: !showNome
        },
        {
            name: 'Cognome',
            selector: 'customer_id.registry[0].cognome',
            sortable: true,
            omit: !showCognome
        },
        {
            name: 'Denominazione',
            selector: 'customer_id.registry[0].denominazione',
            sortable: true,
            omit: !showDenominazione
        },
        {
            name: 'Codice Fiscale',
            selector: 'customer_id.registry[0].codice_fiscale',
            sortable: true,
            omit: !showCF
        },
        {
            name: 'Partita Iva',
            selector: 'customer_id.registry[0].partita_iva',
            sortable: true,
            omit: !showPIVA
        },
        {
            name: 'Marca',
            selector: 'car_id.car_type_id.name',
            sortable: true,
            omit: !showMarca
        },
        {
            name: 'Modello',
            selector:'car_id.name',
            sortable: true,
            omit: !showModello
        },
        {
            name: 'Cilindrata',
            selector:'car_id.displacement',
            sortable: true,
            omit: !showCilindrata
        },
        {
            name: 'Targa',
            selector:'targa',
            sortable: true,
            omit: !showTarga
        },
        {
            name: 'Telaio',
            selector:'telaio',
            sortable: true,
            omit: !showTelaio
        },
        {
            name: 'Stato Vettura',
            selector:'stato_auto',
            sortable: true,
            omit: !showStatoVettura
        },
        {
            name: 'Rate',
            selector:'offerdetail.numero_rate',
            sortable: true,
            omit: !showRate
        },
        {
            name: 'Finanziato',
            selector:'finanziato_totale',
            sortable: true,
            omit: !showFinanziato
        },
        {
            name: 'Acconto',
            selector:'acconto',
            sortable: true,
            omit: !showAcconto
        },
        {
            name: 'Rata Finale',
            selector:'maxirata',
            sortable: true,
            omit: !showRataFinale
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
                        <ColumnButton columnName={"Tipo"} columnState={showTipo} clickHandler={setShowTipo} />
                        <ColumnButton columnName={"Numero"} columnState={showNumero} clickHandler={setShowNumero} />
                        <ColumnButton columnName={"Brand"} columnState={showBrand} clickHandler={setShowBrand} />
                        <ColumnButton columnName={"Convenzione"} columnState={showConvenzione} clickHandler={setShowConvenzione} />
                        <ColumnButton columnName={"Codice Prodotto"} columnState={showCodice} clickHandler={setShowCodice} />
                        <ColumnButton columnName={"Nome Prodotto"} columnState={showNomeProdotto} clickHandler={setShowNomeProdotto} />
                        <ColumnButton columnName={"Stato Pratica"} columnState={showStatoPratica} clickHandler={setShowStatoPratica} />
                        <ColumnButton columnName={"Scadenza"} columnState={showScadenza} clickHandler={setShowScadenza} />
                        <ColumnButton columnName={"Liquidazione"} columnState={showLiquidazione} clickHandler={setShowLiquidazione} />
                        <ColumnButton columnName={"In Scadenza"} columnState={showInScadenza} clickHandler={setShowInScadenza} />
                        <ColumnButton columnName={"TCM SI/NO"} columnState={showTCM} clickHandler={setShowTCM} />
                    </div>
                    <div className="cliente-col">
                        <h3>Cliente</h3>
                        <ColumnButton columnName={"Nome"} columnState={showNome} clickHandler={setShowNome} />
                        <ColumnButton columnName={"Cognome"} columnState={showCognome} clickHandler={setShowCognome} />
                        <ColumnButton columnName={"Denominazione"} columnState={showDenominazione} clickHandler={setShowDenominazione} />
                        <ColumnButton columnName={"Codice Fiscale"} columnState={showCF} clickHandler={setShowCF} />
                        <ColumnButton columnName={"Partita Iva"} columnState={showPIVA} clickHandler={setShowPIVA} />
                    </div>
                    <div className="vettura-col">
                        <h3>Vettura</h3>
                        <ColumnButton columnName={"Marca"} columnState={showMarca} clickHandler={setShowMarca} />
                        <ColumnButton columnName={"Modello"} columnState={showModello} clickHandler={setShowModello} />
                        <ColumnButton columnName={"Cilindrata"} columnState={showCilindrata} clickHandler={setShowCilindrata} />
                        <ColumnButton columnName={"Targa"} columnState={showTarga} clickHandler={setShowTarga} />
                        <ColumnButton columnName={"Telaio"} columnState={showTelaio} clickHandler={setShowTelaio} />
                        <ColumnButton columnName={"Stato Vettura"} columnState={showStatoVettura} clickHandler={setShowStatoVettura} />
                    </div>
                    <div className="finanziamento-col">
                        <h3>Finanziamento</h3>
                        <ColumnButton columnName={"Rate"} columnState={showRate} clickHandler={setShowRate} />
                        <ColumnButton columnName={"Finanziato"} columnState={showFinanziato} clickHandler={setShowFinanziato} />
                        <ColumnButton columnName={"Acconto"} columnState={showAcconto} clickHandler={setShowAcconto} />
                        <ColumnButton columnName={"Rata Finale"} columnState={showRataFinale} clickHandler={setShowRataFinale} />
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

function ColumnButton({columnName, columnState, clickHandler}) {
  return (
    <div className={"btn" + (columnState ? " selected" : "")} onClick={() => clickHandler(!columnState)}>{columnName}</div>
  )
}

function getStatoPraticaLabel(value) {
  return statoPraticaLabels[value];
}