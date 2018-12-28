import React, { Component } from 'react';

import { createStore, combineReducers  } from 'redux';
import { Provider } from 'react-redux';

import searchData from './reducer';


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
                <main>
                    <input placeholder="search"/>
                    <ul>
                        <li>some data</li>
                        <li>some data</li>
                        <li>some data</li>
                        <li>some data</li>
                        <li>some data</li>
                        <li>some data</li>
                        <li>some data</li>
                    </ul>
                </main>
            </Provider>
        );
    }
}

export default App;
