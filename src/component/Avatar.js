import React, {Component} from 'react';

export default class Avatar extends Component {
    render() {
        return (
            <div>
                <ProfilePic username={this.props.username}/>
                <ProfileCard username={this.props.username}/>
            </div>
        )
    }
}

class ProfilePic extends Component {
    render() {
        return (<img role="presentation" src={'img/' + this.props.username}/>)
    }
}

class ProfileCard extends Component {
    render() {
        return (
            <div>
                <a target="_blank" href={'https://www.baidu.com/s?wd=' + this.props.username}>{this.props.username}</a>
            </div>
        )
    }
}
