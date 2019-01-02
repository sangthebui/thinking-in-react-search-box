import { createSelector } from 'reselect'


const marvelCharacters = state => state.searchData.marvelCharacters;
export const searchText = state => state.searchData.searchText;


export const filteredMarvelCharacters = createSelector(
    marvelCharacters,
    searchText,
    (marvelCharacters, searchText) => marvelCharacters.filter(marvelCharacter => marvelCharacter.toLowerCase().includes(searchText.toLowerCase()))
);
