function ButtonFunc({ onDelete, onDisable, disabled }) {
  return (
    <>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onDisable}>{disabled ? "Enable" : "Disable"}</button>
    </>
  );
}

export default ButtonFunc;