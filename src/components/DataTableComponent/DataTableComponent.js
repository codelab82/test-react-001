import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { data } from "./data";
import './DataTableComponent.css';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

const DataTableComponent = () => {

    const [hideTipo, setHideTipo] = useState(false),
          [hideNumPratica, setHideNumPratica] = useState(false),
          [hideConvenzione, setHideConvenzione] = useState(false),
          [hideProdotto, setHideProdotto] = useState(false),
          [hideScadenza, setHideScadenza] = useState(false),
          [hideNome, setHideNome] = useState(false),
          [hideCognome, setHideCognome] = useState(false),
          [hideDenominazione, setHideDenominazione] = useState(false);
    
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
          selector: (row, index) => {return row.agreement_id ? row.agreement_id.code : "NULL";}, //'product_id.name',
          sortable: true,
          omit: hideConvenzione
        },
        {
          name: 'Prodotto',
          selector: (row, index) => {return row.product_id ? row.product_id.name : "NULL";}, //'product_id.name',
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
          selector: (row, index) => {return row.customer_id?.registry?.length ? row.customer_id.registry[0].nome : "NULL";}, 
          sortable: true,
          omit: hideNome
        },
        {
          name: 'Cognome',
          selector: (row, index) => {return row.customer_id?.registry?.length ? row.customer_id.registry[0].cognome : "NULL";}, 
          sortable: true,
          omit: hideCognome
        },
        {
          name: 'Denominazione',
          selector: (row, index) => {return row.customer_id?.registry?.length ? row.customer_id.registry[0].denominazione : "NULL";}, 
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
    
     
    
    return(
        <div className="container">
            <DataTableExtensions {...tableData}>      
            <DataTable 
                className="table"
                title="Movie"
                columns={columns}
                data={data}
                pagination
                expandableRows
                expandableRowsComponent={<ExpandableComponent/>}
                selectableRows
            />
            </DataTableExtensions>
            <input type="checkbox" onClick={() => setHideTipo(!hideTipo)}/>
            <label>Tipo</label>&nbsp;&nbsp;&nbsp;
            <input type="checkbox" onClick={() => setHideNumPratica(!hideNumPratica)}/>
            <label>Num. Pratica</label>&nbsp;&nbsp;&nbsp;
            <input type="checkbox" onClick={() => setHideConvenzione(!hideConvenzione)}/>
            <label>Convenzione</label>&nbsp;&nbsp;&nbsp;
            <input type="checkbox" onClick={() => setHideProdotto(!hideProdotto)}/>
            <label>Prodotto</label>&nbsp;&nbsp;&nbsp;
            <input type="checkbox" onClick={() => setHideScadenza(!hideScadenza)}/>
            <label>Scadenza</label>&nbsp;&nbsp;&nbsp;
            <input type="checkbox" onClick={() => setHideNome(!hideNome)}/>
            <label>Nome</label>&nbsp;&nbsp;&nbsp;
            <input type="checkbox" onClick={() => setHideCognome(!hideCognome)}/>
            <label>Cognome</label>&nbsp;&nbsp;&nbsp;
            <input type="checkbox" onClick={() => setHideConvenzione(!hideConvenzione)}/>
            <label>Denominazione</label>&nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default DataTableComponent;