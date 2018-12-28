import React from 'react';

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import SuggestlistsCSS from './SuggestionLists.css';


const SuggestionLists = ({}) => (
    <ul css={SuggestlistsCSS}>
        <li>some data</li>
        <li>some data</li>
        <li>some data</li>
        <li>some data</li>
        <li>some data</li>
        <li>some data</li>
        <li>some data</li>
        <li>some data</li>
        <li>some data</li>
        <li>some data</li>
        <li>some data</li>
        <li>some data</li>
        <li>some data</li>
        <li>some data</li>
        <li>some data</li>
    </ul>
);

export default SuggestionLists;



