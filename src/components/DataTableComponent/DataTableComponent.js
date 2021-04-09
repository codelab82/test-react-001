import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { data } from "./data";
import './DataTableComponent.css';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

const DataTableComponent = () => {

    const [hideTipo, setHideTipo] = useState(false),
          [checkTipo, setcheckTipo] = useState(true),
          [hideNumPratica, setHideNumPratica] = useState(false),
          [checkNumPratica, setcheckNumPratica] = useState(true),
          [hideConvenzione, setHideConvenzione] = useState(false),
          [checkConvenzione, setcheckConvenzione] = useState(true),
          [hideProdotto, setHideProdotto] = useState(false),
          [checkProdotto, setcheckProdotto] = useState(true),
          [hideScadenza, setHideScadenza] = useState(false),
          [checkScadenza, setcheckScadenza] = useState(true),
          [hideNome, setHideNome] = useState(false),
          [checkNome, setcheckNome] = useState(true),
          [hideCognome, setHideCognome] = useState(false),
          [checkCognome, setcheckCognome] = useState(true),
          [hideDenominazione, setHideDenominazione] = useState(false),
          [checkDenominazione, setcheckDenominazione] = useState(true);

    const columns = [
        {
          name: 'Tipo',
          selector: 'ocs_type',
          sortable: true,
          omit: hideTipo
        },
      {
        name: 'Num. Pratica',
        selector: 'id',
        sortable: true,
        omit: hideNumPratica
      },
        {
          name: 'Convenzione',
          selector: 'agreement_id.code',
          sortable: true,
          omit: hideConvenzione
        },
        {
          name: 'Prodotto',
          selector: 'product_id.name',
          sortable: true,
          omit: hideProdotto
        },
        {
          name: 'Scadenza',
          selector: 'data_scadenza',
          sortable: true,
          omit: hideScadenza
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
      ];

      
      
      const tableData = {
        columns,
        data,
        print : false
      };

      const ExpandableComponent = ( {data} ) => <div className="plot">{data.car_id.car_type_id.name} - {data.car_id.name}</div>
    
      const contextMessage = {
          singular: 'elemento',
          plural: 'elementi',
          message: 'selezionati'
        };

      const paginationComponentOptions = {
          rowsPerPageText: 'Righe per pagina.',
          rangeSeparatorText: 'di',
          noRowsPerPage: false,
          selectAllRowsItem: false,
          selectAllRowsItemText: 'Tutte'
      };
    
    return(
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
                expandableRowsComponent={<ExpandableComponent/>}
                selectableRows
                contextMessage={contextMessage}
                paginationComponentOptions={paginationComponentOptions}
            />
            </DataTableExtensions>
            <input type="checkbox" checked={checkTipo} onClick={() => {setHideTipo(!hideTipo); setcheckTipo(!checkTipo)}}/>
            <label>Tipo</label>&nbsp;&nbsp;&nbsp;
            <input type="checkbox" checked={checkNumPratica} onClick={() => {setHideNumPratica(!hideNumPratica); setcheckNumPratica(!checkNumPratica)}}/>
            <label>Num. Pratica</label>&nbsp;&nbsp;&nbsp;
            <input type="checkbox" checked={checkConvenzione} onClick={() => {setHideConvenzione(!hideConvenzione); setcheckConvenzione(!checkConvenzione)}}/>
            <label>Convenzione</label>&nbsp;&nbsp;&nbsp;
            <input type="checkbox" checked={checkProdotto} onClick={() => {setHideProdotto(!hideProdotto); setcheckProdotto(!checkProdotto)}}/>
            <label>Prodotto</label>&nbsp;&nbsp;&nbsp;
            <input type="checkbox" checked={checkScadenza} onClick={() => {setHideScadenza(!hideScadenza); setcheckScadenza(!checkScadenza)}}/>
            <label>Scadenza</label>&nbsp;&nbsp;&nbsp;
            <input type="checkbox" checked={checkNome} onClick={() => {setHideNome(!hideNome); setcheckNome(!checkNome)}}/>
            <label>Nome</label>&nbsp;&nbsp;&nbsp;
            <input type="checkbox" checked={checkCognome} onClick={() => {setHideCognome(!hideCognome); setcheckCognome(!checkCognome)}}/>
            <label>Cognome</label>&nbsp;&nbsp;&nbsp;
            <input type="checkbox" checked={checkDenominazione} onClick={() => {setHideDenominazione(!hideDenominazione); setcheckDenominazione(!checkDenominazione)}}/>
            <label>Denominazione</label>&nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default DataTableComponent;