import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {t} from '../../src/translate'
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";

const Home = (props) => {

    async function getHeroesCountLoc() {
        let data = await props.drizzle.contracts.HeroCore.methods.getHeroesCount().call();
        console.log(data);
    }

    async function createHeroLoc() {
        let data = await props.drizzle.contracts.HeroCore.methods.createHero('soul', '0xaB3679B6AFEbc6fD7BCDe387fA391F576e86f990')
            .send({from: '0xaB3679B6AFEbc6fD7BCDe387fA391F576e86f990'});
        console.log(data);
    }

    return (
        <div>
             {/*Base navigation*/}
            <p><Link to="/example1">Example1 link</Link></p>

            {/* Change lang complete!!!! */}
            <br/>
            <p>ChangeLang</p>
            <p>Test translate: {t(props.lang, 'Test')}</p>
            <p onClick={() => props.setLang('ru-RU')}>ru</p>
            <p onClick={() => props.setLang('en-GB')}>en</p>

            <br/>
            <button onClick={() => getHeroesCountLoc()}>Get count</button>
            <button onClick={() => createHeroLoc()}>Create hero</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { lang: state.lang, drizzle: state.drizzle }
}

const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
