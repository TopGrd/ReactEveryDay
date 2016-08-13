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

    clickHandler() {
        this.refs.focusIt.focus();
        this.setState({value: 'NULL'});
    }

    render() {
        var value = this.state.value;
        return (
            <div>
                <input type='text' value={value}  ref="focusIt" onChange={this.changeHandler.bind(this)} />
                <p>{value}</p>
                <input type='text' defaultValue="focus" onClick={this.clickHandler.bind(this)} />
            </div>
        )
    }
}
