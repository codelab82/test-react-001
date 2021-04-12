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
        
            const getStatoPraticaLabel = (value) => {
                var arrayListe = {
                  '0': 'Da Firmare',
                  '1': 'Attesa Documentazione',
                  '2': 'Verifica Documentale',
                  '3': 'Anomalie Formali',
                  '4': 'Istruttoria',
                  '5': 'Sospesa',
                  '6': 'Deliberata',
                  '7': 'Da Liquidare',
                  '8': 'Liquidata',
                  '9': 'Respinta',
                  '10': 'Annullata',
                  '11': 'Scaduta',
                  '12': 'Chiusa',
                  '13': 'Da Liquidare non sospesa',
                  '14': 'Da Liquidare sospesa'
                };
                return arrayListe[value];
              }


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
            selector: (row, index) => { return getStatoPraticaLabel(row.cwf_id); },
            cellExport: (row) => { return getStatoPraticaLabel(row.cwf_id); },
            //selector: 'cwf_id',
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
            selector:'offerdetail[0].targa',
            sortable: true,
            omit: hideTarga
        },
        {
            name: 'Telaio',
            selector:'offerdetail[0].telaio',
            sortable: true,
            omit: hideTelaio
        },
        {
            name: 'Stato Vettura',
            selector:'offerdetail[0].stato_auto',
            sortable: true,
            omit: hideStatoVettura
        },
        {
            name: 'Rate',
            selector:'offerdetail[0].numero_rate',
            sortable: true,
            omit: hideRate
        },
        {
            name: 'Finanziato',
            selector:'offerdetail[0].finanziato_totale',
            sortable: true,
            omit: hideFinanziato
        },
        {
            name: 'Acconto',
            selector:'offerdetail[0].acconto',
            sortable: true,
            omit: hideAcconto
        },
        {
            name: 'Rata Finale',
            selector:'offerdetail[0].maxirata',
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
                        <div className={hideTipo ? 'btn-disable' : 'btn'} onClick={() => setHideTipo(!hideTipo)}>Tipo</div>
                        <div className={hideNumero ? 'btn-disable' : 'btn'} onClick={() => setHideNumero(!hideNumero)}>Numero</div>
                        <div className={hideBrand ? 'btn-disable' : 'btn'} onClick={() => setHideBrand(!hideBrand)}>Brand</div>
                        <div className={hideConvenzione ? 'btn-disable' : 'btn'} onClick={() => setHideConvenzione(!hideConvenzione)}>Convenzione</div>
                        <div className={hideCodice ? 'btn-disable' : 'btn'} onClick={() => setHideCodice(!hideCodice)}>Codice Prodotto</div>
                        <div className={hideNomeProdotto ? 'btn-disable' : 'btn'} onClick={() => setHideNomeProdotto(!hideNomeProdotto)}>Nome Prodotto</div>
                        <div className={hideNomeProdotto ? 'btn-disable' : 'btn'} onClick={() => setHideStatoPratica(!hideStatoPratica)}>Stato Pratica</div>
                        <div className={hideScadenza ? 'btn-disable' : 'btn'} onClick={() => setHideScadenza(!hideScadenza)}>Scadenza</div>
                        <div className={hideLiquidazione ? 'btn-disable' : 'btn'} onClick={() => setHideLiquidazione(!hideLiquidazione)}>Liquidazione</div>
                        <div className={hideInScadenza ? 'btn-disable' : 'btn'} onClick={() => setHideInScadenza(!hideInScadenza)}>In Scadenza</div>
                        <div className={hideTCM ? 'btn-disable' : 'btn'} onClick={() => setHideTCM(!hideTCM)}>TCM SI/NO</div>
                    </div>
                    <div className="cliente-col">
                        <h3>Cliente</h3>
                        <div className={hideNome ? 'btn-disable' : 'btn'} onClick={() => setHideNome(!hideNome)}>Nome</div>
                        <div className={hideCognome ? 'btn-disable' : 'btn'} onClick={() => setHideCognome(!hideCognome)}>Cognome</div>
                        <div className={hideDenominazione ? 'btn-disable' : 'btn'} onClick={() => setHideDenominazione(!hideDenominazione)}>Denominazione</div>
                        <div className={hideCF ? 'btn-disable' : 'btn'} onClick={() => setHideCF(!hideCF)}>Codice Fiscale</div>
                        <div className={hidePIVA ? 'btn-disable' : 'btn'} onClick={() => setHidePIVA(!hidePIVA)}>Partita Iva</div>
                    </div>
                    <div className="vettura-col">
                        <h3>Vettura</h3>
                        <div className={hideMarca ? 'btn-disable' : 'btn'} onClick={() => setHideMarca(!hideMarca)}>Marca</div>
                        <div className={hideModello ? 'btn-disable' : 'btn'} onClick={() => setHideModello(!hideModello)}>Modello</div>
                        <div className={hideCilindrata ? 'btn-disable' : 'btn'} onClick={() => setHideCilindrata(!hideCilindrata)}>Cilindrata</div>
                        <div className={hideTarga ? 'btn-disable' : 'btn'} onClick={() => setHideTarga(!hideTarga)}>Targa</div>
                        <div className={hideTelaio ? 'btn-disable' : 'btn'} onClick={() => setHideTelaio(!hideTelaio)}>Telaio</div>
                        <div className={hideStatoVettura ? 'btn-disable' : 'btn'} onClick={() => setHideStatoVettura(!hideStatoVettura)}>Stato Vettura</div>
                    </div>
                    <div className="finanziamento-col">
                        <h3>Finanziamento</h3>
                        <div className={hideRate ? 'btn-disable' : 'btn'} onClick={() => setHideRate(!hideRate)}>Rate</div>
                        <div className={hideFinanziato ? 'btn-disable' : 'btn'} onClick={() => setHideFinanziato(!hideFinanziato)}>Finanaziato</div>
                        <div className={hideAcconto ? 'btn-disable' : 'btn'} onClick={() => setHideAcconto(!hideAcconto)}>Acconto</div>
                        <div className={hideRataFinale ? 'btn-disable' : 'btn'} onClick={() => setHideRataFinale(!hideRataFinale)}>Rata Finale</div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DataTableComponent;