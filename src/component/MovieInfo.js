import React, {Component} from 'react';
import $ from 'jquery';

export default class MovieInfo extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            rating: '',
            summary: ''
        }
    }

    componentDidMount() {
        $.get(this.props.source, (result) => {

            this.setState({
                title: result.title,
                rating: result.rating.average,
                summary: result.summary
            });

        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <p>评分：{this.state.rating}</p>
                <p>内容：{this.state.summary}</p>
            </div>
        )
    }
}
