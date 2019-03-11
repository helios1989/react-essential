import React, { Component } from 'react';
import Header from './component/Header';
import Home from './component/Home';

class AppIndex extends Component {
    render() {
        let content = "";
        const name = "VERGEL";
        const age = 29;
        const user = {
            hobbies: ['basketball', 'watching', 'reading'],
            nickName: 'verge'
        };
        if (true) {
            content = `<h1>${name}</h1>`;
        }
        return (
            <div className="container">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Header/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Home name={name} initialAge={age} user={user}>

                    {content}
                    </Home>
                    {/* <Home/> */}
                </div>
            </div>
        </div>
        )
    }
}
export default AppIndex;