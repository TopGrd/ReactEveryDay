import React, {Component} from 'react';

export default class LikeButton extends Component {
    constructor() {
        super();
        this.state = {
            like: true
        }
    }

    handlerClick() {
        this.setState({
            like: !this.state.like
        });
    }

    render() {
        let likeText = this.state.like ? 'Liked' : 'I don\'t like it';
        return (
            <div>
                Do You Like Cat? Click It!
                <button type="button" onClick={this.handlerClick.bind(this)}>ClickMe</button>
                {likeText}
            </div>
        )
    }
}
