import React, { Component } from 'react';
import { connect } from 'react-redux';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'


import SearchBox from "./SearchBox";
import SuggestionLists from "./SuggestionLists";

import SearchContainerCSS from './SearchContainer.css';

import { searchText, filteredMarvelCharacters } from './selectors';
import { saveSearchtext } from "./actions";

const mapState = state => {
    return {
        searchText: searchText(state),
        filteredMarvelCharacters: filteredMarvelCharacters(state)
    }
};

const mapActions = {
    saveSearchtext
};


class SearchContainer extends Component{
    state = {
        shouldShowSuggestions: false,
    };

    onChangeHandler = (event) => {
        let shouldShowSuggestions = false;
        const searchText = event.target.value;
        if (searchText.length > 0){
            shouldShowSuggestions = true;
        } else if (searchText.length === 0){
            shouldShowSuggestions = false;
        }


        this.setState({
            shouldShowSuggestions
        });

        const { saveSearchtext } = this.props;
        saveSearchtext(searchText);

    };


    render(){

        const {  shouldShowSuggestions } = this.state;
        const { searchText, filteredMarvelCharacters } = this.props;
        return (
            <main css={SearchContainerCSS}>
                <SearchBox value={searchText} onChangeHandler={this.onChangeHandler}/>
                { (shouldShowSuggestions) ? <SuggestionLists suggestions={filteredMarvelCharacters} /> : null}
            </main>
        )
    }
}

export default connect(mapState, mapActions)(SearchContainer);