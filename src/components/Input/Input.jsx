import React from 'react'

const Input = ({ type, className = "form-control", register, name = "default", required = false }) => {
  return <input type={type} className={className} {...register(name, { required })} />
}

export default Input;