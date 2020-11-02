import React from 'react'
import classnames from 'classnames'
const TextInput =(props) =>{
    const {name , id , type , placeholder , value , onChange,label,error} = props
    return (
        <div className="col">
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          name={name}
          id={id}
          className={classnames('form-control' , {"is-invalid" : error})}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {error ? (<div className="invalid-feedback">{error}</div>):null}
      </div>
    )
}

TextInput.defaultProps = {
    type : "text"
}

export default TextInput