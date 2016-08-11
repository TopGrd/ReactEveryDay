import React, {Component} from 'react';

export default class Input extends Component {
    constructor() {
        super();
        this.state = {
            value: 'ChangeMe'
        }
    }

    changeHandler(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        var value = this.state.value;
        return (
            <div>
                <input type='text' value={value} onChange={this.changeHandler.bind(this)}/>
                <p>{value}</p>
            </div>
        )
    }
}
