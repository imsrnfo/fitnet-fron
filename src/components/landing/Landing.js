import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Landing extends Component{
    render(){
        return(
            <div>
                <Link to="/login">Login</Link>
            </div>
        );
    }
}

export default Landing;