import React, { Component } from 'react';

import { createStore, combineReducers  } from 'redux';
import { Provider } from 'react-redux';

import searchData from './reducer';
import SearchContainer from "./SearchContainer";


const allReducers = combineReducers({
    searchData
});

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


class App extends Component {
    render() {
        return (
            <Provider store={store} >
                <SearchContainer/>
            </Provider>
        );
    }
}

export default App;
