import {Link} from "react-router-dom";
import './style.css';

const Example1 = (props) => {
    return (
        <div className={'example1'}>
            Example1
            <p><Link to="/">Home</Link></p>
        </div>
    );
}

export default Example1;