import React, {Component} from 'react';

export default class OpacityWord extends Component {
    constructor() {
        super();
        this.state = {
            opacity: 1.0
        }
    }

    componentWillMount() {
        // eslint-disable-next-line
        let timer = setInterval(() => {
            let opacity = this.state.opacity;
            opacity -= 0.1;
            if (opacity < 0.1) {
                opacity = 1.0
            }
            this.setState({opacity: opacity});
        }, 200);
    }

    render() {
        return (
            <div style={{
                opacity: this.state.opacity
            }}>Hello My {this.props.name}</div>
        )
    }
}
