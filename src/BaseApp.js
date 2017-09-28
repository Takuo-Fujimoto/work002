import React, { Component } from 'react';
import Header from './cmp/Header'
import Button from './cmp/Button/Button'
import PaymentApprove from './view/PaymentApprove'


class BaseApp extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header />
                <div className='ContentsMargin'>
                    <PaymentApprove />
                </div>
            </div>);
    }

}
export default BaseApp;