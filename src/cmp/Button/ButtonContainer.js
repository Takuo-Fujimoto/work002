import React, { Component } from 'react';
import Button from './Button';

class ButtonContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let buttons = this.props.buttons.map(function (buttonData) {
            return (<Button id={buttonData.id} text={buttonData.text}
                isTextVisible={buttonData.buttonLabelVisible} onClick={buttonData.onClick} />);
        }, this);
        return (
            <div id='buttonContainer' style={{ display: 'flex' }} >
                {buttons}
            </div>);
    }

}
export default ButtonContainer;