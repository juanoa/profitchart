import React from "react";
import * as PropTypes from "prop-types";

export const SelectGroup = ({label, name, onChange, options, value}) => (
  <div>
    {label && <label>{label}</label>}
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="input-select"
    >
      {options.map(option => <option value={option.value} label={option.label}/>)}
    </select>
  </div>
);

SelectGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
};