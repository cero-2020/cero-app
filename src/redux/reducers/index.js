import {combineReducers} from 'redux';

import lang from './src/lang';
import drizzle from './src/drizzle';
import account from "./src/account";
import addressToHeroes from "./src/addressToHeroes";
import syncData from "./src/syncData";
import heroToCreate from "./src/heroToCreate";
import heroCreated from "./src/heroCreated";

const rootReducer = () => combineReducers({
    lang: lang,
    drizzle: drizzle,
    account: account,
    addressToHeroes: addressToHeroes,
    syncData: syncData,
    heroToCreate: heroToCreate,
    heroCreated: heroCreated
});

export default rootReducer;