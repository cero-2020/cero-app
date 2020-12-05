import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { setDrizzle } from "../../redux/actions/drizzle";
import { setAccountWallet, setAccountBalance } from "../../redux/actions/account";
import { setLastSyncUpdate } from "../../redux/actions/syncData";
import { connect } from "react-redux";
import {getWeb3} from "../../src/metamask";

import App from "../StartPage/StartPage";
import HeroCreate from "../HeroCreate";
import HeroList from "../HeroList";
import HeroStats from "../HeroStats/HeroStats";
import Account from "../Account";
import {decodeSoul} from "../../src/hero-logic/create-soul";
import {setAddressToHeroes} from "../../redux/actions/addressToHeroes";

const Config = (props) => {
    const [web3State, setWeb3] = useState(null);

    useEffect(() => {
        // Set drizzle to store
        props.setDrizzle(props.drizzle);

        // Set account to store
        const web3 = getWeb3();

        if (null !== web3) {
            web3.eth.getAccounts(function (err, accounts) {
                if (err === null && accounts.length !== 0) {
                    props.setAccountWallet(accounts[0])
                    web3.eth.getBalance(accounts[0]).then((balance) => {
                        props.setAccountBalance(balance);
                    });
                }
            });
        }
        setWeb3(web3);

    }, [])

    if (undefined !== window.ethereum) {
        window.ethereum.on('accountsChanged', function (accounts) {
            props.setAccountWallet(accounts[0])

            if (null !== web3State) {
                web3State.eth.getBalance(accounts[0]).then((balance) => {
                    props.setAccountBalance(balance);
                });
            }
        })
    }

    useEffect(async () => {
        if ((Date.now() - props.syncData.lastUpdate) < 10000 || null === props.drizzleState || null === props.account.wallet) return;

        let addressToHeroes = await getAddressesToHeroes();
        if (Object.keys(addressToHeroes).length !== 0) props.setAddressToHeroes(addressToHeroes);

    })

    async function getAddressesToHeroes() {
        let data = await props.drizzleState.contracts.HeroCore.methods.getHeroesOwner().call();

        let addressToHeroesNum = [];
        for (let i = 0; i < data.heroOwner.length; i++) {
            let hero = await props.drizzleState.contracts.HeroCore.methods.getHeroInfo(data.heroNum[i]).call();
            hero.info = decodeSoul(hero.soul);
            hero.number = data.heroNum[i];

            let account = data.heroOwner[i].toUpperCase();

            if (undefined === addressToHeroesNum[account]) {
                addressToHeroesNum[account] = [hero];
            } else {
                addressToHeroesNum[account].push(hero);
            }
        }
        return addressToHeroesNum;
    }


    return (
        <Router>
            <Switch>
                <Route path="/account" component={Account} />
                <Route path="/hero-list" component={HeroList} />
                <Route path="/hero-stats" component={HeroStats} />
                <Route path="/hero-create" component={HeroCreate} />
                <Route path="/my-hero" component={HeroCreate} />
                <Route path="/" component={App} />
            </Switch>
        </Router>
    );
}

const mapStateToProps = (state) => {
    return {
        drizzleState: state.drizzle,
        account: state.account,
        syncData: state.syncData
    }
}

const mapDispatchToProps = { setDrizzle, setAccountWallet, setAccountBalance, setLastSyncUpdate, setAddressToHeroes }

export default connect(mapStateToProps, mapDispatchToProps)(Config)
