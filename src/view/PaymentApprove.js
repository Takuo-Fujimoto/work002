import React, { Component } from 'react';
import Button from './../cmp/Button/Button'
import ButtonContainer from './../cmp/Button/ButtonContainer'
import SelectableInput from './../cmp/SelectableInput'


class PaymentApprove extends Component {

    constructor(props) {
        super(props);
        this.switchComponent = this.switchComponent.bind(this);
        let buttonData = [{
            id: 'BackSpace',
            text: '戻る',
            buttonLabelVisible: true,
            onClick: this.switchComponent
        },
        {
            id: 'Oriduru',
            text: '保存',
            buttonLabelVisible: true
        },
        {
            id: 'Iine',
            text: '承認依頼',
            buttonLabelVisible: true
        },
        {
            id: 'RobotArm',
            text: '受払承認者印刷',
            buttonLabelVisible: true
        }];
        this.state = {
            component: true,
            buttonLabelVisible: true,
            buttonData: buttonData
        };
        this.changeButtonLabelVisivle = this.changeButtonLabelVisivle.bind(this);
        this.inputText = this.inputText.bind(this);
    }
    switchComponent(e) {
        console.log(e.target.id);
        this.setState({ component: !this.state.component });
    }
    changeButtonLabelVisivle(e) {
        console.log(e.target.id);
        this.setState({ buttonLabelVisible: !this.state.buttonLabelVisible });
    }
    inputText(e) {
        console.log(e.target.id);
        let tempObj = {};
        tempObj[e.target.id] = e.target.valuw;
        this.setState(tempObj);
    }

    render() {
        return (<div>
            <ButtonContainer buttons={this.state.buttonData} />
            <div >
                <div id='headerPainTitle' style={{ fontSize: '1.2em' }}>ヘッダ情報</div>
                <div id='headerContent' style={{
                    display: 'flex'
                }}>
                    <div id='flex' style={{
                        flex: '1',
                    }}>
                        <SelectableInput componentType={this.state.component} id='ipt1' col='1'
                            label='伝票日付' enableZenkaku='true' type='text' onChange={this.inputText} />
                        <SelectableInput componentType={this.state.component} id='ipt2' col='1'
                            label='伝票番号' enableZenkaku='true' type='text' onChange={this.inputText} />
                        <SelectableInput componentType={this.state.component} id='ipt3' col='1'
                            label='修正番号' enableZenkaku='true' type='text' onChange={this.inputText} />
                        <SelectableInput componentType={this.state.component} id='ipt4' col='1'
                            label='所属部門コード' enableZenkaku='true' type='text' onChange={this.inputText} />
                        <SelectableInput componentType={this.state.component} id='ipt5' col='2'
                            label='所属部門' enableZenkaku='true' type='text' onChange={this.inputText} />
                        <SelectableInput componentType={this.state.component} id='ipt6' col='1'
                            label='申請者コード' enableZenkaku='true' type='text' onChange={this.inputText} />
                        <SelectableInput componentType={this.state.component} id='ipt7' col='2'
                            label='申請者' enableZenkaku='true' type='text' onChange={this.inputText} />
                        <SelectableInput componentType={this.state.component} id='ipt8' col='1'
                            label='支払種別' enableZenkaku='true' type='text' onChange={this.inputText} />
                        <SelectableInput componentType={this.state.component} id='ipt9' col='1'
                            label='支払希望日' enableZenkaku='true' type='text' onChange={this.inputText} />
                        <SelectableInput componentType={this.state.component} id='ipt10' col='1'
                            label='支払当月提示払い締日' enableZenkaku='true' type='text' onChange={this.inputText} />
                        <SelectableInput componentType={this.state.component} id='ipt11' col='3'
                            label='伝票適用' enableZenkaku='true' type='text' onChange={this.inputText} />
                    </div>
                </div>

            </div>

        </div>);
    }

}
export default PaymentApprove;