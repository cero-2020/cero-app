import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider);
const abiJsonInterface = [{"constant":false,"inputs":[{"internalType":"string","name":"_soul","type":"string"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_parent1","type":"uint256"},{"internalType":"uint256","name":"_parent2","type":"uint256"},{"internalType":"bool","name":"isNoParent","type":"bool"}],"name":"createHero","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getFights","outputs":[{"internalType":"uint256[]","name":"hero1","type":"uint256[]"},{"internalType":"uint256[]","name":"hero2","type":"uint256[]"},{"internalType":"uint256[]","name":"winner","type":"uint256[]"},{"internalType":"uint256[]","name":"time","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_heroNum","type":"uint256"}],"name":"getHeroInfo","outputs":[{"internalType":"string","name":"soul","type":"string"},{"internalType":"uint256","name":"birthday","type":"uint256"},{"internalType":"uint256","name":"parent1","type":"uint256"},{"internalType":"uint256","name":"parent2","type":"uint256"},{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"lastFight","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_heroNum","type":"uint256"}],"name":"getHeroOwner","outputs":[{"internalType":"address","name":"heroOwner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getHeroesCount","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getHeroesOwner","outputs":[{"internalType":"uint256[]","name":"heroNum","type":"uint256[]"},{"internalType":"address[]","name":"heroOwner","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_hero1Num","type":"uint256"},{"internalType":"uint256","name":"_hero2Num","type":"uint256"},{"internalType":"address","name":"_hero1Owner","type":"address"},{"internalType":"bool","name":"isWinnerHero1","type":"bool"},{"internalType":"string","name":"soul","type":"string"}],"name":"heroesFight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
export const drizzleOptions = {
    contracts: [
        {
            contractName: 'HeroCore',
            web3Contract: new web3.eth.Contract(abiJsonInterface, '0x03c74a6870d31f9ea5efbfced37db3a5baa223e7')
        }
    ],
    web3: {
        fallback: {
            type: "ws",
            url: "ws://54.187.245.252:8545",
        },
    },
};