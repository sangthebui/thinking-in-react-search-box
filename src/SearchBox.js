import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import SearchBoxCSS from './SearchBox.css'

const SearchBox = ({}) => (
    <input css={SearchBoxCSS} placeholder="search" />
);


export default SearchBox;