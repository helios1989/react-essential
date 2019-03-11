import React, { Component } from 'react';
import Header from './component/Header';
import Home from './component/Home';

class AppIndex extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Header/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Home/>
                </div>
            </div>
        </div>
        )
    }
}
export default AppIndex;