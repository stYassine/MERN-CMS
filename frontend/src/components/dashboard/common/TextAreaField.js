import React from 'react';
import propTypes from 'prop-types';

const TextAreaField =({
    name, value, placeholder,
    on_change, error
}) => {
    return(
        <div className="form-group">
            <textarea 
                className="form-control"
                rows="10"
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={on_change}
            />

            { error && <p className="form-text text-danger">{error}</p> }

        </div>
    )
}


export default TextAreaField;