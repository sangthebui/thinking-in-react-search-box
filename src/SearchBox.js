import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import SearchBoxCSS from './SearchBox.css'

const SearchBox = ({value, onChangeHandler}) => (
    <input css={SearchBoxCSS}
           placeholder="search"
           value={value}
           onChange={onChangeHandler}
    />
);


export default SearchBox;