function SelectOption({value, onOperatorChange, isLastRow   }) {
  const handleChange = (event) => {
    onOperatorChange(event.target.value);
  };
  const selectClass = isLastRow ? "highlight-yellow" : "highlight-green";
    return (
      <select 
        value={value} 
        onChange={handleChange}
        className={selectClass}>
        <option >+</option>
        <option>-</option>
        <option>*</option>
      </select>
    );
}

export default SelectOption;