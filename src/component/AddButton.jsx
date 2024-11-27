function AddButton( { onAdd } ) { 
  return (
    <div>
      <button className="add-row-button" onClick={ onAdd }> Add Row </button>
    </div>
  );
}

export default AddButton;