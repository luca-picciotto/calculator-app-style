import { useState } from "react";
import React from "react";
import AddButton from "./component/AddButton";
import LiElement from "./component/LiElement";
import ResultComponent from "./component/ResultComponent";
import "./styles/calculator.css";

export default function Calculator() {
  const [rows, setRows] = useState([]);
  const [values, setValues] = useState([]);
  const [operators, setOperators] = useState([]);
  const [disabledStates, setDisabledStates] = useState([]);

  const addRow = () => {
    const newRow = { id: Date.now() };
    setRows([...rows, newRow]);
    setValues([...values, 0]);
    setOperators([...operators, "+"]);
    setDisabledStates([...disabledStates, false]);
  };

  const removeRow = (indexToRemove) => {
    const filterByIndex = (array, indexToRemove) => {
      const newArray = [];
      for (let i = 0; i < array.length; i++) {
        if (i !== indexToRemove) {
          newArray.push(array[i]);
        }
      }
      return newArray;
    };

    setRows(filterByIndex(rows, indexToRemove));

    setValues(filterByIndex(values, indexToRemove));

    setOperators(filterByIndex(operators, indexToRemove));

    setDisabledStates(filterByIndex(disabledStates, indexToRemove));
  };

  const handleOperatorChange = (index, newOperator) => {
    const updatedOperators = [...operators];

    updatedOperators[index] = newOperator;

    setOperators(updatedOperators);
  };

  const handleInputChange = (index, newValue) => {
    const updatedValues = [...values];

    updatedValues[index] = newValue;

    setValues(updatedValues);
  };

  const disableRow = (indexToDisable) => {
    const updatedDisabledStates = [...disabledStates];

    updatedDisabledStates[indexToDisable] =
      !updatedDisabledStates[indexToDisable];

    setDisabledStates(updatedDisabledStates);
  };

  const activeValues = [];
  for (let i = 0; i < values.length; i++) {
    if (!disabledStates[i]) {
      activeValues.push(values[i]);
    }
  }

  return (
    <div className="wrapper">
      <AddButton onAdd={addRow} />
      <ul>
        {rows.map((row, index) => {
          const isLastRow = rows.length === 1 || index === rows.length - 1;

          return (
            <LiElement
              key={row.id}
              disabled={disabledStates[index]}
              value={values[index]}
              onDelete={() => removeRow(index)}
              onDisable={() => disableRow(index)}
              onInputChange={(newValue) => handleInputChange(index, newValue)}
              operator={operators[index]}
              OnOperatorChange={(newOperator) =>
                handleOperatorChange(index, newOperator)
              }
              isLastRow={isLastRow}
            />
          );
        })}
      </ul>
      <ResultComponent activeValues={activeValues} operators={operators} />
    </div>
  );
}
