import React, { Component } from 'react';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='Header HeaderHeight'>
                <table width='100%' cellSpacing='0'>
                    <tr style={{
                        backgroundColor: 'Blue',
                        color: 'White'
                    }}>
                        <td width='25%' style={{
                            borderRight: 'solid thin white'
                        }}><div style={{
                            border: 'solid 2px white'
                        }}>TOPへ戻る</div>
                        </td>
                        <td width='25%' style={{
                            borderRight: 'solid thin white'
                        }}>
                        </td>
                        <td width='25%' style={{
                            borderRight: 'solid thin white'
                        }}>
                        </td>
                        <td width='25%' style={{
                            borderRight: 'solid thin white'
                        }}>
                        </td>
                    </tr>
                    <tr style={{
                        backgroundColor: 'pink',
                        color: 'Blue',
                        textAlign: 'left'
                    }}>
                        <td width='25%'>pFlN
                        </td>
                        <td width='25%'>(個人モード)
                        </td>
                        <td width='25%'>
                        </td>
                        <td width='25%'>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }

}
export default Header;