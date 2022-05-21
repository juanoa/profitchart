import React from "react";

interface Props {
  label?: string;
  name: string;
  placeholder?: string;
  onChange: any;
  type?: string;
  value: string | ReadonlyArray<string> | number | undefined;
}

export const FormGroup = ({label, name, placeholder, onChange, type = "text", value}: Props) => (
  <div>
    {label && <label>{label}</label>}
    <input
      className="input"
      autoComplete="off"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);