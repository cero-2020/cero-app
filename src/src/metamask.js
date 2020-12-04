import Web3 from "web3";

export function getWeb3() {
    let web3 = new Web3();
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            window.ethereum.enable().then(function() {
            });
        } catch (e) {
        }
        return web3;
    }
    else if (window.web3) {
        web3 = new Web3(web3.currentProvider);
        return web3;
    }
    else {
        return null;
    }
}