import React from 'react';

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import SuggestlistsCSS from './SuggestionLists.css';


const SuggestionLists = ({suggestions = []}) => {

    const suggestionsView = suggestions.map(eachSuggestion => (
       <li>{eachSuggestion}</li>
    ));

    return (
        <ul css={SuggestlistsCSS}>
            {suggestionsView}
        </ul>
)};

export default SuggestionLists;



