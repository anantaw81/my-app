import React from 'react'

const Input = ({value, label, placeholder}) => {
  return (
    <div className="form-group first">
        <label htmlFor={label}>{value}</label>
        <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        id={label}
        />
    </div>
  )
}

export default Input