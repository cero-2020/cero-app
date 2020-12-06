import {combineReducers} from 'redux';

import lang from './src/lang';
import drizzle from './src/drizzle';
import account from "./src/account";
import addressToHeroes from "./src/addressToHeroes";
import syncData from "./src/syncData";
import heroToCreate from "./src/heroToCreate";
import heroToFight from "./src/heroToFight";
import heroCreated from "./src/heroCreated";

const rootReducer = () => combineReducers({
    lang: lang,
    drizzle: drizzle,
    account: account,
    addressToHeroes: addressToHeroes,
    syncData: syncData,
    heroToFight: heroToFight,
    heroToCreate: heroToCreate,
    heroCreated: heroCreated
});

export default rootReducer;