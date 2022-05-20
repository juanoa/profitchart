import React, {ChangeEventHandler} from "react";

interface Props {
  label?: string;
  name: string;
  placeholder?: string;
  onChange: any;
  value: string | ReadonlyArray<string> | number | undefined;
}

export const FormGroup = ({label, name, placeholder, onChange, value}: Props) => (
  <div>
    {label && <label>{label}</label>}
    <input
      className="input"
      autoComplete="off"
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);