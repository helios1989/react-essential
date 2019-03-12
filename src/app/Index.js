import React, { Component } from 'react';
import {Header} from './component/Header';
import Home from './component/Home';

class AppIndex extends Component {
    constructor() {
        super();
       this.state = {
           homeLink: 'Home'
       }
    }
    onGreet() {
        alert('hello');
    }
    onChangeLinkName(newName) {
        alert(newName);
        this.setState({
            homeLink: newName
        });
    }
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
                    <Header homeLink={this.state.homeLink}/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Home 
                        name={name} 
                        initialAge={age} 
                        user={user} 
                        greet={this.onGreet}
                        changeLink={this.onChangeLinkName.bind(this)}>
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