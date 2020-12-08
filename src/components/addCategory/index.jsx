import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = (props) => {

    const { setCategories} = props;
    
    const form = useRef(null);
    
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(inputValue => e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputValue.trim()){
            return
        }
        setCategories(cats => [inputValue, ...cats]);
        setInputValue('');
        form.current.reset()
    }

    return(
        <form
         ref={form}
         onSubmit={handleSubmit}>
            <input
            onChange={handleChange}
            type='text'
            value={inputValue}
            />
            <button type='submit'>Send</button>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}