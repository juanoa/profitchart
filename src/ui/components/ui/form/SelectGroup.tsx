import React from "react";

interface Props {
  label?: string;
  name: string;
  onChange: any;
  options: Array<{ value: string, label: string }>;
  value: string | number
}

export const SelectGroup = ({label, name, onChange, options, value}: Props) => (
  <div>
    {label && <label>{label}</label>}
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="input-select"
    >
      {options.map(option => <option value={option.value} label={option.label} key={option.value}/>)}
    </select>
  </div>
);
