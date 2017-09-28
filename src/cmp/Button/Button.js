import React, { Component } from 'react';
import BackSpace from './../svg/BackSpace';
import Oriduru from './../svg/Oriduru';
import RobotArm from './../svg/RobotArm';
import KagiHako from './../svg/kagiHako';
import Iine from './../svg/Iine';
let iconMap = {
    'BackSpace': BackSpace,
    'Oriduru': Oriduru,
    'RobotArm': RobotArm,
    'KagiHako': KagiHako,
    'Iine': Iine
}

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            iconSize: {
                width: '32px',
                height: '32px',
                position: 'relative',
                top: '4px',
                marginRight: '10px'
            },
            iconColor: {
                fill: '#1c673c'
            }
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        const SvgImg = iconMap[this.props.id];
        let strCount = this.props.text.length;
        let textValue = this.props.text;
        let outerStyle = {
            height: '50px',
            marginLeft: '5px'
        };
        let innerStyle = {
            backgroundColor: '#17aa56',
            boxShadow: '0 5px #119e4d',
            borderRadius: '10px'
        };
        if (!this.props.isTextVisible) {
            strCount = 0;
            textValue = '';
            innerStyle.paddingRight = '0px';
        }
        outerStyle.width = (47 + (strCount * 23)) + 'px';
        return (
            <div style={outerStyle} onClick={this.onClick}>
                <div className='PressedButton' style={innerStyle}>
                    <SvgImg id={this.props.id}
                        style={this.state.iconSize}
                        color={this.state.iconColor}></SvgImg>
                    <span style={{ verticalAlign: 'text-bottom' }}>{textValue}</span>

                </div>
            </div>)
    }

}
export default Button;