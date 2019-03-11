import React, { Component } from 'react';

export default class Header extends Component {
    // eslint-disable-next-line
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="home">Home</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}