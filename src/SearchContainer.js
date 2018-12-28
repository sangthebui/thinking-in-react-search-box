import React, { Component } from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'


import SearchBox from "./SearchBox";
import SuggestionLists from "./SuggestionLists";

import SearchContainerCSS from './SearchContainer.css';

export default class SearchContainer extends Component{
    render(){
        return (
            <main css={SearchContainerCSS}>
                <SearchBox/>
                <SuggestionLists/>
            </main>
        )
    }
}