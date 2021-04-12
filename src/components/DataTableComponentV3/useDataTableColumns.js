import { useState } from "react";


export function useDataTableColumns() {
    const [enabledColumns, setEnabledColumns] = useState(defaultState);

    const toggleColumn = (column) => {
        let newState = {
            ...enabledColumns
        }
        newState[column] = !enabledColumns[column];
        setEnabledColumns(newState);
    }

    return {enabledColumns, toggleColumn};
}

const defaultState = {
    tipo: true,
    numero: true,
    brand: false,
    convenzione: true,
    codice: false,
    nomeProdotto: true,
    statoPratica: false,
    scadenza: false,
    liquidazione: false,
    inScadenza: false,
    tcm: false,
    nome: true,
    cognome: true,
    denominazione: true,
    codiceFiscale: false,
    partitaiva: false,
    marca: false,
    modello: false,
    cilindrata: false,
    targa: false,
    telaio: false,
    statoVettura: false,
    rate: false,
    finanziamento: false,
    acconto: false,
    ratafinale: false,
}