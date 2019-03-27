import React  from 'react';

const SelectGroup =({
    name, value, placeholder, on_change,
    options
}) => {
    const options_list =options.map((option) => (
        <option value={option._id}>{option.name}</option>
    ));
    return(
        <div className="form-group">
            <select className="form-control" 
                name={name}
                value={value}
                onChange={on_change}
                >
                <option selected disabled hidden>{ placeholder }</option>
            </select>
        </div>
    )
}

export default SelectGroup;