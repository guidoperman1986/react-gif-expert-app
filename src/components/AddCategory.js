import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('')

    const handelInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                autoFocus="on"
                type="text"
                value={inputValue}
                onChange={(e)=>handelInputChange(e)}
            >                
            </input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}