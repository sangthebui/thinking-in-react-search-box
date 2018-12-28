import React, { Component } from 'react';
import SearchBox from "./SearchBox";

import SuggestionLists from "./SuggestionLists";

export default class SearchContainer extends Component{
    render(){
        return (
            <main>
                <SearchBox/>
                <SuggestionLists/>
            </main>
        )
    }
}