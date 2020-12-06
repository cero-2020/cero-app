import React from "react";
import './style.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setToCreateHero1, setToCreateHero2} from "../../redux/actions/heroToCreate";
import HeroItem from "./HeroItem";

const Hero = (props) => {
    return (
        <Link to={"/hero-stats?number=" + props.heroData.number} key="key" className="Link_item">
            <HeroItem heroData={props.heroData}/>
        </Link>
    );

    if ('createHero1' === props.action) {
        return (
            <div onClick={() => {props.setToCreateHero1(props.heroData); props.toggle();}} className="HeroItem">
                <HeroItem heroData={props.heroData}/>
            </div>
        )
    } else if ('createHero2' === props.action) {
        return (
            <div onClick={() => {props.setToCreateHero2(props.heroData); props.toggle();}} className="HeroItem">
                <HeroItem heroData={props.heroData}/>
            </div>
        )
    } else if ('none' === props.action) {
        return (
            <div className="HeroItem">
                <HeroItem heroData={props.heroData}/>
            </div>
        )
    } else {
        return (
            <Link to={"/hero-stats?number=" + props.heroData.number} className="HeroItem" key="key">
                <HeroItem heroData={props.heroData}/>
            </Link>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.lang,
    }
}

const mapDispatchToProps = { setToCreateHero1, setToCreateHero2 }

export default connect(mapStateToProps, mapDispatchToProps)(Hero);