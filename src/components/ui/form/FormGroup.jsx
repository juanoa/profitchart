import * as PropTypes from "prop-types";
import React from "react";

export const FormGroup = ({label, name, placeholder, onChange, value}) => (
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

FormGroup.defaultProps = {
  placeholder: ""
}

FormGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};