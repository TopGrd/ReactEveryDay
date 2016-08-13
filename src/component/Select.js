import React, {Component} from 'react';
export default class Select extends Component {
    constructor() {
        super();
        this.state = {
            value: 'C',
            plane: 'Earth'
        }
    }

    componentWillUpdate() {
        console.log('loa');
    }

    changeHandler = (e) => {
        this.setState({
            value: e.target.value
        }, function () {
            switch (this.state.value) {

                case 'A':
                    this.setState({plane: 'Sun'});
                    break;
                case 'B':
                    this.setState({plane: 'Moon'});
                    break;
                case 'C':
                    this.setState({plane: 'Earth'});
                    break;
                default:
                    break;
            }
        });

    }

    render() {
        var plane = this.state.plane;

        return (
            <div>Choose Your Plane !
                <select defaultValue='C' onChange={this.changeHandler}>
                    <option value="A">Sun</option>
                    <option value="B">Moon</option>
                    <option value="C">Earth</option>
                </select>
                <p>
                    You choose {plane} to live.
                </p>
            </div>
        )
    }

}
