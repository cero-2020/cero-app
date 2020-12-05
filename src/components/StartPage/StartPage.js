import React, { useState } from "react";
import '../src/main.css'
import './style.css';
import Fox from '../src/images/fox.svg';
import Header from '../Header/Header';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";
import Hero from '../Hero/Hero';
import '../src/font/Gilroy-Regular.woff'; 
import '../src/font/Gilroy-Bold.woff'; 
import '../src/font/Helvetica.woff';
import ModalInfo from "../Modal/ModalInfo";
import {getWeb3} from "../../src/metamask";
import {setAccountBalance, setAccountWallet} from "../../redux/actions/account";

const StartPage = (props) => {
    const [showInfo, setSHowInfo] = useState(false);

    const connectMetamask = () => {
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
        } else {
            setSHowInfo(true);
        }
    }

    return (
        <div className="">
            <Header/>
            <section className="top">
                <div className="container">
                    <div >
                        <h1 className="top__title">{t(props.lang, 'Crypto hero this is cero')}</h1>
                        <p className="grey-text top__text">{t(props.lang,'Magician born in the school of magic. From birth he feels a great craving for everything magical and spiritual.')}</p>
                        <p>
                            <div className="main-btn" onClick={() => connectMetamask()}>
                                {t(props.lang, 'Connect to')}
                                <img src={Fox} alt={Fox}/>
                            </div>
                        </p>
                    </div>
                    <img  src={`${process.env.PUBLIC_URL}/images/book.png`} />
                </div>
            </section>

            <section className="hero">
                <div className="container">
                    <h2 className="title-min">{t(props.lang,  'Play, upgrade, trade, and win new heroes')}</h2>
                    <p className="hero__text">{t(props.lang,'Each cero has unique abilities. Unlock new ceroes by defeating or improving ceroes of the same level.')}</p>
                    <div className="hero__block">
                        <img  src={`${process.env.PUBLIC_URL}/images/player3.svg`} />
                        <img  src={`${process.env.PUBLIC_URL}/images/player1.svg`} />
                        <img  src={`${process.env.PUBLIC_URL}/images/player2.svg`} />
                        <img  src={`${process.env.PUBLIC_URL}/images/player3.svg`} />
                        <img  src={`${process.env.PUBLIC_URL}/images/player4.svg`} />
                        <img  src={`${process.env.PUBLIC_URL}/images/player5.svg`} />
                        <img  src={`${process.env.PUBLIC_URL}/images/player6.svg`} />
                    </div>
                </div>
            </section>
            <section className="play">
                <div className="container">
                    <img  src={`${process.env.PUBLIC_URL}/images/hat.svg`} />
                    <div className="play__info">
                        <h2 className="title-min">{t(props.lang, 'Play, upgrade, trade, and win')}</h2>
                        <ul>
                            <li>{t(props.lang, 'Blalala Play and trade heroes asdas dsa')}</li>
                            <li>{t(props.lang, 'Blalala Play and trade heroes asdas dsa')}</li>
                            <li>{t(props.lang, 'Blalala Play and trade heroes asdas dsa')}</li>
                            <li>{t(props.lang, 'Blalala Play and trade heroes asdas dsa')}</li>
                            <li>{t(props.lang, 'Blalala Play and trade heroes asdas dsa')}</li>
                            <li>{t(props.lang, 'Blalala Play and trade heroes asdas dsa')}</li>
                        </ul>
                    </div>
                </div>
            </section>
            <ModalInfo isShowing={showInfo} setSHowInfo={setSHowInfo} message={'Please install Metamask plugin to your browser and connect to Cero!'} />
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        lang: state.lang,
        account: state.account
    }
}

const mapDispatchToProps = { setLang, setAccountWallet, setAccountBalance }

export default connect(mapStateToProps, mapDispatchToProps)(StartPage)