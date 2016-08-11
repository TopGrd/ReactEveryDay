import React, {Component} from 'react';

export default class HelloWorld extends Component {
    render() {
        return (
            <div>
                Hello,
                <input type="text" placeholder="Your name here"/>! it's {this.props.date.toTimeString()}
            </div>
        );
    }
}
