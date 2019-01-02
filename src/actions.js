import { SAVE_SEARCH_TEXT } from "./constants";

export function saveSearchtext(searchText){
    return {
        type: SAVE_SEARCH_TEXT,
        payload: searchText
    }
}