import React from 'react';
import ReactDOM from 'react-dom';
import {Drizzle} from "@drizzle/store";
import {DrizzleContext} from "@drizzle/react-plugin";
import {drizzleOptions} from "./drizzle/contract-config";

import { Provider } from 'react-redux'
import store from './redux/configureStore'

import Config from "./components/Config";

const drizzle = new Drizzle(drizzleOptions);

ReactDOM.render(
    <DrizzleContext.Provider drizzle={drizzle}>
        <Provider store={store}>
            <DrizzleContext.Consumer>
                {drizzleContext => {
                    const {drizzle, drizzleState, initialized} = drizzleContext;
                    if(!initialized) {
                        return "Loading..."
                    }
                    return (
                        <Config drizzle={drizzle} />
                    )
                }}
            </DrizzleContext.Consumer>
        </Provider>
    </DrizzleContext.Provider>,
    document.getElementById('root')
);
