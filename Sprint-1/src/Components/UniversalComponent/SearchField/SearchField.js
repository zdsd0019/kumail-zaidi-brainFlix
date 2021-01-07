import React, { Component } from 'react';
import './SearchField.scss';

class SearchField extends Component {
    render() {
        return (
            <>
              <input type='search' name='search-field' placeholder='Search' className='search' />  
            </>
        )
    };
};

export default SearchField;
