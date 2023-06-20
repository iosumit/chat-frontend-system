import { useState } from "react";

const inputStyle = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  color: '#333',
  backgroundColor: '#f1f5f0',
  width: '100%',
  display: 'block',
  outline:"none"
};

function TextInput(props) {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState('');
  function handleChange(event) {
    const newValue = event.target.value
    setInputValue(newValue);
    if (props.onChange) props.onChange(newValue);
  };

  return (
    <>
      {props.tittle ? <span >{props.tittle} &nbsp; </span>:null}
      <input
        type={inputType}
        value={props?.value}
        onChange={handleChange}
        placeholder={props?.placeholder}
        autoComplete={props?.autocomplete ? props.autocomplete : "off"}
        style={inputStyle} />
      <br />
    </>
  );
};

export default TextInput;