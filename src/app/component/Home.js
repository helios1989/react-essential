import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Home extends Component {
    render() {
        // console.log(this.props);
        // console.log(this.props.user.nickName);
        let content = '';
        if (this.props) {
            content = <div>
                <p>In a new Component!</p>
                <p>Hello passed name: {this.props.name}</p>
                <p>Nickname is: {this.props ? this.props.user.nickName : ''}</p>
                <p>Hello passed age: {this.props.age}</p>
                <br></br>
                <p>Hobbies are</p>
                <ul>
                    {this.props.user.hobbies.map((h,i) => <li key={i}>{h}</li>)}
                </ul>
                <p>children data:
                    {this.props.children}
                </p>
            </div>
        }
        return (
            <div>{content ? content :'hello'}</div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object
}