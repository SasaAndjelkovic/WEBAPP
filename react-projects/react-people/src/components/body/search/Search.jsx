import React from 'react';
import './Search.css';

export const Search = ({ setSearchTerm }) => ( 
    <div className='search'>
        <span className='material-icons searchColor'>search</span>
        <input
            placeholder='Search...'
            type='text'
            onChange = {(event) => {
                setSearchTerm(event.target.value);
            }}
        ></input>
    </div>
);

//u ovom delu treba obnoviti props i a.target.value