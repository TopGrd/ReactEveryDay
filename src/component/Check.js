import React, {Component} from 'react';

export default class Check extends Component {
    render() {
        return (
            <div>
                <a {...this.props}>
                    {'√'}{this.props.children}</a>
            </div>
        )
    }
}
