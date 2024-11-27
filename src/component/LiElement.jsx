import ButtonFunc from "./ButtonFunc";
import InputElement from "./InputElement";
import SelectOption from "./SelectOption";
/**
 * The LiElement function in JavaScript React renders a list item with input fields for number,
 * operator selection, and buttons for deletion or disabling.
 * @returns The `LiElement` function is returning a JSX element representing a list item (`<li>`).
 * Inside the list item, it includes an `InputElement` component for entering a number, a
 * `SelectOption` component for choosing an operator, and a `ButtonFunc` component for deleting or
 * disabling the element. The list item's class is conditionally set to "disabled" based on the
 * `disabled
 */

function LiElement(props) {
  const {
    onDelete,
    onDisable,
    disabled,
    value,
    onInputChange,
    operator,
    OnOperatorChange,
    isLastRow,
  } = props;

  return (
    <li className={disabled ? "disabled" : ""}>
      {/* Campo per inserire il numero */}
      <InputElement 
        value={value}
        onChange={onInputChange}
        disabled={disabled} 
      />
      
      {/* Campo per scegliere l'operatore */}
      <SelectOption 
        value={operator}
        onOperatorChange={OnOperatorChange}
        isLastRow={isLastRow}
      />
      
      {/* Pulsanti per eliminare o disabilitare */}
      <ButtonFunc 
        onDelete={onDelete}
        onDisable={onDisable}
        disabled={disabled}
      />
    </li>
  );
}

export default LiElement;
