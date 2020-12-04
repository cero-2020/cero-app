import {getWeb3} from "./src/metamask";

const App = (props) => {
    const web3 = getWeb3();
    let account = null;
    web3.eth.getAccounts(function (err, accounts) {
        if (err != null) {
            // console.error("An error occurred: " + err);
        } else if (accounts.length === 0) {
            // console.log("User is not logged in to MetaMask");
        } else {
            // console.log("User is logged in to MetaMask");
            account = accounts[0];
        }
    });
    window.ethereum.on('accountsChanged', function (accounts) {
        account = accounts[0];
    })

    const drizzle = props.drizzle;
    const contract = drizzle.contracts.HeroCore;


    async function getHeroesCountLoc() {
        let data = await contract.methods.getHeroesCount().call();
        console.log(data);
    }

    async function createHeroLoc() {
        let data = await contract
            .methods
            .createHero('soul', account)
            .send({from: account});
        console.log(data);
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>HELLLLLOO</p>
                <button onClick={() => getHeroesCountLoc()}>Get count</button>
                <button onClick={() => createHeroLoc()}>Create hero</button>
            </header>
        </div>
    );
}

export default App;
