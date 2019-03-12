import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Home extends Component {
    //props
    constructor(props) {
        super();
        this.age = props.age;
        this.state = {
            age: props.initialAge,
            status: 0
        }
    }
    onMakeOlder() {
        this.setState({
            age: this.state.age+3
        })
        this.age+=3;
        console.log(this.age);
    }

    render() {
        let content = '';
        if (this.props) {
            content = <div>
                <p>In a new Component!</p>
                <p>Hello passed name: {this.props.name}</p>
                <p>Nickname is: {this.props ? this.props.user.nickName : ''}</p>
                <p>Hello passed age: {this.state.age}</p>
                <br></br>
                <p>Hobbies are</p>
                <ul>
                    {this.props.user.hobbies.map((h,i) => <li key={i}>{h}</li>)}
                </ul>
                <p>children data:
                    {this.props.children}
                </p>
                <button onClick={()=> this.onMakeOlder()}>Make me older</button>
                <button onClick={ this.props.greet}>Green</button>
                {/* Other technique */}
                {/* <button onClick={this.onMakeOlder.bind(this)}className="btn btn-success">Make me older</button> */}
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
    user: PropTypes.object,
    greet: PropTypes.func
}