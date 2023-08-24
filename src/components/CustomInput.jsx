import React from "react";

const CustomInput = ({ type, label, id, iclass, name, value, onChange }) => {
  return (
    <div className="form-fade mt-3">
      <input
        type={type}
        id={id}
        className={`form-control ${iclass}`}
        placeholder={label}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onChange}
      />
    </div>
  );
};

export default CustomInput;
