import React, { Component } from 'react';


class LanelAndInput extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <span style={{
                display: 'inline-block',
                width: this.props.col * 50 + '%',
                marginTop: '2px'
            }}>
                <span style={{
                    display: 'inline-block',
                    width: 50 / this.props.col + '%',
                    backgroundColor: '#ffffa9',
                    padding: '0.5em 0em'
                }}>
                    <label for={this.props.id}>{this.props.label}</label>
                </span>
                <span style={{
                    display: 'inline-block',
                    width: 100 - (50 / this.props.col) + '%',
                    backgroundColor: '#c1c1c1',
                    padding: '0.5em 0em'
                }}>
                    <input id={this.props.id} style={{
                        width: 'calc(100% - 0.5em)',
                        height: '1.5em',
                        verticalAlign: 'text-bottom'
                    }}></input>
                </span>
            </span>);
    }

}
export default LanelAndInput;