import React from "react";
import './style.css';
import Header from '../Header/Header';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";

const Account = (props) => {
    console.log(props)
    return (
        <div>
            <Header/>
            <div className={'HeroList Account'}>
            <div className="container">
                <div className="HeroList__content">
                    <div  className="HeroList__top">
                        <h1 className="top__title">{t(props.lang,'Account')}</h1>
                        <p className="grey-text">{t(props.lang,'Magician born in the school of magic. From birth he feels a great craving for everything magical and spiritual.')}</p>
                    </div>
                    <div className="Account__container">
                       <div>
                           <p className="Account-subtitle">{t(props.lang,'Wallet')}</p>
                           <p className="Account-title">{props.account.wallet}</p>
                       </div>
                       <div>
                            <p className="Account-subtitle">{t(props.lang,'Balance')}</p>
                            <p className="Account-title">{Math.round(props.account.balance / 100000000000000) / 10000} ETH</p>
                       </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return { 
        lang: state.lang, 
        account: state.account
    }
}

const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(Account);