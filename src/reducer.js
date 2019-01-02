
import marvelCharacters from './marvelCharacters';
import { SAVE_SEARCH_TEXT }from './constants';

const initialState = {
    marvelCharacters,
    searchText: ""
}

export default function(state=initialState, action){
    switch(action.type) {
        case SAVE_SEARCH_TEXT:
            return {...state, searchText: action.payload };
        default:
            return state;
    }
}