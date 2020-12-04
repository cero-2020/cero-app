import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { setDrizzle } from "../../redux/actions/drizzle";
import { setAccountWallet, setAccountBalance } from "../../redux/actions/account";
import { connect } from "react-redux";
import {getWeb3} from "../../src/metamask";

import Home from '../Home';
import Example1 from "../Example1/Example1";

const Config = (props) => {
    useEffect(() => {
        // Set drizzle to store
        props.setDrizzle(props.drizzle);

        // Set account to store
        const web3 = getWeb3();
        web3.eth.getAccounts(function (err, accounts) {

            if (err === null && accounts.length !== 0) {
                props.setAccountWallet(accounts[0])
                web3.eth.getBalance(accounts[0]).then((balance) => {
                    props.setAccountBalance(balance);
                });

            }
        });
    }, [])

    window.ethereum.on('accountsChanged', function (accounts) {
        props.setAccountWallet(accounts[0])
    })

    return (
        <Router>
            <Switch>
                <Route path="/example1" component={Example1} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

const mapStateToProps = (state) => {
    return {
        drizzleState: state.drizzle
    }
}

const mapDispatchToProps = { setDrizzle, setAccountWallet, setAccountBalance }

export default connect(mapStateToProps, mapDispatchToProps)(Config)
