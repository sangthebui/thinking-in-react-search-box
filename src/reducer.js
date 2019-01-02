
import marvelCharacters from './marvelCharacters';

const initialState = {
    marvelCharacters,
    searchText: ""
}

export default function(state=initialState, action){
    switch(action.type) {
        default:
            return state;
    }
}