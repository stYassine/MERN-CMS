import React from 'react';
import propTypes from 'prop-types';


const TextInput =({
    type, name, value, placeholder,
    on_change, error
}) => {
    return(
        <div className="form-group">
            <input 
                type={type} 
                className="form-control" 
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={on_change}
                />
            
                { error && <p className="form-text text-danger">{error}</p> }

        </div>
    )
}

TextInput.propTypes ={
    type: propTypes.string,
    name: propTypes.string.isRequired,
    value: propTypes.string,
    placeholder: propTypes.string,
    on_change: propTypes.func.isRequired,
    error : propTypes.string
}


TextInput.defaultProps ={
    type: 'text'
}


export default TextInput;