import {combineReducers} from 'redux';

import lang from './src/lang';
import drizzle from './src/drizzle';
import account from "./src/account";

const rootReducer = () => combineReducers({
    lang: lang,
    drizzle: drizzle,
    account: account,
});

export default rootReducer;