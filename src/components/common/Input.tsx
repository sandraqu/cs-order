import { ChangeEvent } from "react";

interface InputProps {
  name: string;
  label: string;
  value: string | number;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  label,
  value,
  placeholder,
  handleChange,
  ...props
}: InputProps & Record<string, unknown>) => {
  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        {...props}
      />
      console.log(...props)
      {/* {props.max && <button>Add 100</button>} */}
    </>
  );
};

export default Input;
