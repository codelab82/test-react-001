import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { data } from "./data";
import './DataTableComponent.css';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import {statoPraticaLabels} from './utils'
import { useDataTableColumns } from './useDataTableColumns';

export default function DataTableComponentV3() {

    const {enabledColumns, toggleColumn} = useDataTableColumns();

    const columns = [
        {
            name: 'Tipo',
            selector: 'ocs_type',
            sortable: true,
            omit: !enabledColumns.tipo
        },
        {
            name: 'Numero',
            selector: 'id',
            sortable: true,
            omit: !enabledColumns.numero
        },
        {
            name: 'Brand',
            selector: 'brand_id.id',
            sortable: true,
            omit: !enabledColumns.brand
        },        
        {
            name: 'Convenzione',
            selector: 'agreement_id.code',
            sortable: true,
            omit: !enabledColumns.convenzione
        },
        {
            name: 'Codice Prodotto',
            selector: 'product_id.product_type_id.code',
            sortable: true,
            omit: !enabledColumns.codice
        },
        {
            name: 'Nome Prodotto',
            selector: 'product_id.name',
            sortable: true,
            omit: !enabledColumns.nomeProdotto
        },
        {
            name: 'Stato Pratica',
            selector: (row, index) => { return getStatoPraticaLabel(row.cwf_id); },
            cellExport: (row) => { return getStatoPraticaLabel(row.cwf_id); },
            sortable: true,
            omit: !enabledColumns.statoPratica
        },
        {
            name: 'Scadenza',
            selector: 'data_scadenza',
            sortable: true,
            omit: !enabledColumns.scadenza
        },
        {
            name: 'Liquidazione',
            selector: 'offerdetail.data_liquidazione',
            sortable: true,
            omit: !enabledColumns.liquidazione
        },
        {
            name: 'In Scadenza',
            selector: 'is_tcm',
            sortable: true,
            omit: !enabledColumns.inScadenza
        },
        {
            name: 'TCM SI/NO',
            selector: 'product_id.product_type_id.is_tcm',
            sortable: true,
            omit: !enabledColumns.tcm
        },
        {
            name: 'Nome',
            selector: 'customer_id.registry[0].nome',
            sortable: true,
            omit: !enabledColumns.nome
        },
        {
            name: 'Cognome',
            selector: 'customer_id.registry[0].cognome',
            sortable: true,
            omit: !enabledColumns.cognome
        },
        {
            name: 'Denominazione',
            selector: 'customer_id.registry[0].denominazione',
            sortable: true,
            omit: !enabledColumns.denominazione
        },
        {
            name: 'Codice Fiscale',
            selector: 'customer_id.registry[0].codice_fiscale',
            sortable: true,
            omit: !enabledColumns.codiceFiscale
        },
        {
            name: 'Partita Iva',
            selector: 'customer_id.registry[0].partita_iva',
            sortable: true,
            omit: !enabledColumns.partitaiva
        },
        {
            name: 'Marca',
            selector: 'car_id.car_type_id.name',
            sortable: true,
            omit: !enabledColumns.marca
        },
        {
            name: 'Modello',
            selector:'car_id.name',
            sortable: true,
            omit: !enabledColumns.modello
        },
        {
            name: 'Cilindrata',
            selector:'car_id.displacement',
            sortable: true,
            omit: !enabledColumns.cilindrata
        },
        {
            name: 'Targa',
            selector:'targa',
            sortable: true,
            omit: !enabledColumns.targa
        },
        {
            name: 'Telaio',
            selector:'telaio',
            sortable: true,
            omit: !enabledColumns.telaio
        },
        {
            name: 'Stato Vettura',
            selector:'stato_auto',
            sortable: true,
            omit: !enabledColumns.statoVettura
        },
        {
            name: 'Rate',
            selector:'offerdetail.numero_rate',
            sortable: true,
            omit: !enabledColumns.rate
        },
        {
            name: 'Finanziato',
            selector:'finanziato_totale',
            sortable: true,
            omit: !enabledColumns.finanziato
        },
        {
            name: 'Acconto',
            selector:'acconto',
            sortable: true,
            omit: !enabledColumns.acconto
        },
        {
            name: 'Rata Finale',
            selector:'maxirata',
            sortable: true,
            omit: !enabledColumns.rataFinale
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
            <ColumnPanel enabledColumns={enabledColumns} toggleColumn={toggleColumn} />
        </div>
    )
}

function ColumnPanel({enabledColumns, toggleColumn}) {
    console.log("enabledColumns: ", enabledColumns)
    console.log("toggleColumn: ", toggleColumn)
    return (
        <div>
                <div className="conf-col">
                    <h3>Configuarazione colonne</h3>
                </div>
                <div className="flex-row">
                    <div className="pratica-col">
                        <h3>Pratica</h3>
                        {allColumns.pratica.map((item) => <ColumnButton name={item.name} enabled={enabledColumns[item.id]} toggleHandler={() => toggleColumn(item.id)} />)}
                    </div>
                    <div className="cliente-col">
                        <h3>Cliente</h3>
                        {allColumns.cliente.map((item) => <ColumnButton name={item.name} enabled={enabledColumns[item.id]} toggleHandler={() => toggleColumn(item.id)} />)}
                    </div>
                    <div className="vettura-col">
                        <h3>Vettura</h3>
                        {allColumns.vettura.map((item) => <ColumnButton name={item.name} enabled={enabledColumns[item.id]} toggleHandler={() => toggleColumn(item.id)} />)}
                    </div>
                    <div className="finanziamento-col">
                        <h3>Finanziamento</h3>
                        {allColumns.finanziamento.map((item) => <ColumnButton name={item.name} enabled={enabledColumns[item.id]} toggleHandler={() => toggleColumn(item.id)} />)}
                    </div>
                </div>
            </div>
    )
}

function ColumnButton({name, enabled, toggleHandler}) {
  return (
    <div className={"btnV3" + (enabled ? " selected" : "")} onClick={toggleHandler}>{name}</div>
  )
}

function getStatoPraticaLabel(value) {
  return statoPraticaLabels[value];
}

const allColumns = {
    pratica: [
        {name: "Tipo", id: "tipo"},
        {name: "Numero", id: "numero"},
        {name: "Brand", id: "brand"},
        {name: "Convenzione", id: "convenzione"},
        {name: "Codice Prodotto", id: "codiceProdotto"},
        {name: "Nome Prodotto", id: "nomeProdotto"},
        {name: "Stato Pratica", id: "statoPratica"},
        {name: "Scadenza", id: "scadenza"},
        {name: "Liquidazione", id: "liquidazione"},
        {name: "In Scadenza", id: "inScadenza"},
        {name: "TCM SI/NO", id: "tcm"},
    ],
    cliente: [
        {name: "Nome", id: "nome"},
        {name: "Cognome", id: "cognome"},
        {name: "Denominazione", id: "denominazione"},
        {name: "Codice Fiscale", id: "codiceFiscale"},
        {name: "Partita Iva", id: "partitaIva"},
    ],
    vettura: [
        {name: "Marca", id: "marca"},
        {name: "Modello", id: "modello"},
        {name: "Cilindrata", id: "cilindrata"},
        {name: "Targa", id: "targa"},
        {name: "Telaio", id: "telaio"},,
        {name: "Stato Vettura", id: "statoVettura"},
    ],
    finanziamento: [
        {name: "Rate", id: "rate"},
        {name: "Finanziato", id: "finanziato"},
        {name: "Acconto", id: "acconto"},
        {name: "Rata Finale", id: "rataFinale"}
    ]
}