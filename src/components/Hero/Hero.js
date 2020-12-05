import React from "react";
import './style.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import HeroItem from "./HeroItem";

const Hero = (props) => {
    return (
        <Link to={"/hero-stats?number=" + props.heroData.number} key="key" className="Link_item">
            <HeroItem heroData={props.heroData}/>
        </Link>
    );
}

const mapStateToProps = (state) => {
    return {lang: state.lang}
}
export default connect(mapStateToProps)(Hero);
