import { add, subtract, multiply } from "../utils/mathFunctions";
/**
 * The `ResultComponent` function in JavaScript React calculates the result of a mathematical
 * expression based on active values and operators provided.
 * @returns The `ResultComponent` function returns a JSX element that displays the expression formed by
 * the active values and operators, along with the result of the calculation. If there are no active
 * values, it displays "Risultato: 0".
 */

function ResultComponent({ activeValues, operators }) {
  if (activeValues.length === 0) {
    return <p>Risultato: 0</p>; // Mostra 0 se non ci sono valori attivi
  }

  // Mappa per associare gli operatori alle funzioni corrispondenti
  const operationsMap = {
    "+": add,
    "-": subtract,
    "*": multiply,
  };

  let expression = ""; // Inizializza l'espressione vuota
  for (let i = 0; i < activeValues.length; i++) {
    if (i === 0) {
      // Il primo valore non richiede un operatore
      expression = `${activeValues[i]}`;
    } else {
      // Aggiungi l'operatore e il valore corrente
      const operator = operators[i - 1]; // Prendi l'operatore precedente
      expression += ` ${operator} ${activeValues[i]}`;
    }
  }

  

  let result = 0; // Inizializza il risultato a 0
  for (let i = 0; i < activeValues.length; i++) {
    if (i === 0) {
      // Il primo valore è il punto di partenza
      result = activeValues[i];
    } else {
      // Ottieni l'operatore precedente e la funzione associata
      const operator = operators[i - 1];
      const operation = operationsMap[operator];
      // Applica l'operazione tra il risultato corrente e il valore
      result = operation([result, activeValues[i]]);
    }
  }


  // Ritorna il risultato e l'espressione
  return <p>{expression} = {result}</p>;
}

export default ResultComponent;
