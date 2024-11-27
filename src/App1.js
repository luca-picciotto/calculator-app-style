import { useState } from "react";
import React from "react";
import AddButton from "./component/AddButton";
import LiElement from "./component/LiElement";
import ResultComponent from "./component/ResultComponent";
import './styles/calculator.css';
/**
 * The `Calculator` function in JavaScript is a React component that manages rows of values, operators,
 * and disabled states for a calculator interface.
 * @returns The `Calculator` component is being returned, which contains the JSX elements for rendering
 * the calculator interface. It includes an "AddButton" component for adding new rows, a list of
 * "LiElement" components for each row with functionalities like deleting, disabling, and updating
 * values and operators, and a "ResultComponent" displaying the result based on active values and
 * operators.
 */

export default function Calculator() {
  const [rows, setRows] = useState([]);
  const [values, setValues] = useState([]);
  const [operators, setOperators] = useState([]);
  const [disabledStates, setDisabledStates] = useState([]);

  /**
   * The `addRow` function adds a new row with default values to different arrays in a React state.
   */
  const addRow = () => {
    const newRow = { id: Date.now() };
    setRows([...rows, newRow]);
    setValues([...values, 0]);
    setOperators([...operators, "+"]);
    setDisabledStates([...disabledStates, false]);
  };

  
  /** 
   * The `removeRow` function removes an element from multiple arrays at a specified index.
   * @param indexToRemove - The `indexToRemove` parameter in the `removeRow` function represents the
   * index of the row that you want to remove from the arrays `rows`, `values`, `operators`, and
   * `disabledStates`. When you call the `removeRow` function with a specific index, it will remove the
   * corresponding
   */
  const removeRow = (indexToRemove) => {
    /**
     * The `filterByIndex` function removes an element from an array based on the specified index and
     * returns a new array.
     * @param array - An array of elements that you want to filter.
     * @param indexToRemove - The `indexToRemove` parameter in the `filterByIndex` function is the
     * index of the element in the array that you want to remove. When the function is called, it will
     * iterate through the array and exclude the element at the specified index, returning a new array
     * without that element.
     * @returns The `filterByIndex` function returns a new array with the element at the specified
     * `indexToRemove` removed.
     */
    const filterByIndex = (array, indexToRemove) => {
      const newArray = [];
      for (let i = 0; i < array.length; i++) {
        if (i !== indexToRemove) {
          newArray.push(array[i]);
        }
      }
      return newArray;
    };
  
    /* `setRows(filterByIndex(rows, indexToRemove));` is a line of code in the `removeRow` function of
    the `Calculator` component in React. This line is responsible for updating the `rows` state by
    removing an element at a specific index from the `rows` array using the `filterByIndex`
    function. */
    setRows(filterByIndex(rows, indexToRemove));
    /* The line `setValues(filterByIndex(values, indexToRemove));` is updating the `values` state in the
    `Calculator` component of a React application. */
    setValues(filterByIndex(values, indexToRemove));
    /* The line `setOperators(filterByIndex(operators, indexToRemove));` in the `removeRow` function of the
    `Calculator` component is updating the `operators` state by removing an element at a specific index
    from the `operators` array using the `filterByIndex` function. This line ensures that when a row is
    removed from the calculator interface, the corresponding operator associated with that row is also
    removed from the `operators` array to maintain consistency in the calculator's operations. */
    setOperators(filterByIndex(operators, indexToRemove));
    /* The line `setDisabledStates(filterByIndex(disabledStates, indexToRemove));` in the `removeRow`
    function of the `Calculator` component is updating the `disabledStates` state by removing an element
    at a specific index from the `disabledStates` array using the `filterByIndex` function. This line
    ensures that when a row is removed from the calculator interface, the corresponding disabled state
    associated with that row is also removed from the `disabledStates` array to maintain consistency in
    the calculator's interface and functionality. */
    setDisabledStates(filterByIndex(disabledStates, indexToRemove));
  };
  
  
  /**
   * The function `handleOperatorChange` updates an operator at a specific index in an array of
   * operators.
   * @param index - The `index` parameter in the `handleOperatorChange` function represents the
   * position of the operator in the `operators` array that you want to update with the new operator.
   * @param newOperator - The `newOperator` parameter in the `handleOperatorChange` function represents
   * the new operator value that will replace the operator at the specified index in the `operators`
   * array.
   */
  const handleOperatorChange = (index, newOperator) => {
   
    /* The line `const updatedOperators = [...operators];` in the `handleOperatorChange` function is
    creating a copy of the `operators` array using the spread syntax (`...`). */
    const updatedOperators = [...operators];
    
    
    /* The line `updatedOperators[index] = newOperator;` in the `handleOperatorChange` function is updating
    the operator value at a specific index in the `updatedOperators` array. */
    updatedOperators[index] = newOperator;
    
    /* The line `setOperators(updatedOperators);` in the `handleOperatorChange` function is updating the
    state of the `operators` array in the React component. */
    setOperators(updatedOperators);
  };

  
  /**
   * The function `handleInputChange` updates a specific value in an array of values at a given index.
   * @param index - The `index` parameter in the `handleInputChange` function represents the position
   * of the value in the array that you want to update.
   * @param newValue - The `newValue` parameter in the `handleInputChange` function represents the new
   * value that you want to update at a specific index in the `values` array.
   */
  const handleInputChange = (index, newValue) => {

    /* The line `const updatedValues = [...values];` is creating a copy of the `values` array using the
    spread syntax (`...`). By spreading the `values` array into a new array `updatedValues`, a shallow
    copy of the original `values` array is made. This approach ensures that any modifications made to
    `updatedValues` do not affect the original `values` array directly.*/
    const updatedValues = [...values];

    /* The line `updatedValues[index] = newValue;` in the `handleInputChange` function is updating a
    specific value in the `updatedValues` array at the index specified. */
    updatedValues[index] = newValue;

    /* The line `setValues(updatedValues);` in the `handleInputChange` function is updating the state of
    the `values` array in the React component. */
    setValues(updatedValues);
  };


  /**
   * The `disableRow` function toggles the disabled state of a specific row in a list of disabled states.
   * @param indexToDisable - The `indexToDisable` parameter in the `disableRow` function represents the
   * index of the row that you want to disable or enable in a table or grid. By passing the index of the
   * row to this function, you can toggle the disabled state of that particular row.
   */
  const disableRow = (indexToDisable) => {
      /* The line `const updatedDisabledStates = [...disabledStates];` is creating a copy of the
      `disabledStates` array using the spread syntax (`...`). By spreading the `disabledStates` array into
      a new array `updatedDisabledStates`, a shallow copy of the original `disabledStates` array is made.
      This approach ensures that any modifications made to `updatedDisabledStates` do not affect the
      original `disabledStates` array directly. It is a common practice in React to create copies of state
      arrays or objects before making modifications to ensure immutability and proper state management. */
    const updatedDisabledStates = [...disabledStates];
    
      /* The line `updatedDisabledStates[indexToDisable] = !updatedDisabledStates[indexToDisable];` in the
      `disableRow` function is toggling the disabled state of a specific row in a list of disabled states. */
    updatedDisabledStates[indexToDisable] = !updatedDisabledStates[indexToDisable];
    
      /* The line `setDisabledStates(updatedDisabledStates);` in the `disableRow` function is updating the
      state of the `disabledStates` array in the React component. */
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
        {/* /* This part of the code is using the `map` function on the `rows` array to iterate over each
        element in the array. For each element (row) in the `rows` array, it is creating a new
        element based on the provided function. */}
        {rows.map((row, index) =>  {
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
              OnOperatorChange={(newOperator) => handleOperatorChange(index, newOperator)}
              isLastRow={isLastRow}
            />
          );
        })}
      </ul>
      <ResultComponent activeValues={activeValues} operators={operators} />
    </div>
  );
}
