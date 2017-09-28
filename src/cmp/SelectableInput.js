import React, { Component } from 'react';
import LabelAndInput from './LabelAndInput/LabelAndInput'
import JuroInput from './JuroInput/JuroInput'


class SelectableInput extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(` type is ${this.props.componentType} `);
        if (this.props.componentType) {
            let col = this.props.col > 2 ? 2 : this.props.col;
            return (<LabelAndInput label={this.props.label} col={col}
                type={this.props.type} id={this.props.id} />)
        } else {
            return (<JuroInput label={this.props.label}
                id={this.props.id} enableZenkaku='true'
                type={this.props.type} col={this.props.col} />)
        }
    }

}
export default SelectableInput;