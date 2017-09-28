import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LabelAndInput from './cmp/LabelAndInput/LabelAndInput'
import JuroInput from './cmp/JuroInput/JuroInput'
import SelectableInput from './cmp/SelectableInput'
import Header from './cmp/Header'
import Button from './cmp/Button/Button'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: 'plain',
      buttonLabelVisible: true
    };
    this.switchComponent = this.switchComponent.bind(this);
    this.changeButtonLabelVisivle = this.changeButtonLabelVisivle.bind(this);
  }
  switchComponent(e) {
    console.log(e.target.id);
    this.setState({ component: e.target.id });
  }
  changeButtonLabelVisivle(e) {
    console.log(e.target.id);
    this.setState({ buttonLabelVisible: !this.state.buttonLabelVisible });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div id='contentsArea'
          className='ContentsMargin'>
          <div style={{ marginBottom: '20px' }}>
            <LabelAndInput label='testLabel' />
            <JuroInput id='sample' label='Label' enableZenkaku='true' type='text' />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <SelectableInput componentType={this.state.component} id='sample1'
              label='Label' enableZenkaku='true' type='text' />
            <SelectableInput componentType={this.state.component} id='sample2'
              label='Label' enableZenkaku='true' type='text' />
          </div>
          <div>
            <span onClick={this.switchComponent} id='plain' style={{ marginRight: '10px' }}>plain</span>
            <span onClick={this.switchComponent} id='Juro'>Juro</span>
          </div>
          <div>
            <Button id='BackSpace' text='戻る' isTextVisible={this.state.buttonLabelVisible} />
            <Button id='Oriduru' text='保存' isTextVisible={this.state.buttonLabelVisible} />
            <Button id='Iine' text='承認依頼' isTextVisible={this.state.buttonLabelVisible} />
            <Button id='RobotArm' text='受払承認者印刷' isTextVisible={this.state.buttonLabelVisible} />
            <Button id='KagiHako' text='テスト' isTextVisible={this.state.buttonLabelVisible} />
          </div>
          <div>
            <span onClick={this.changeButtonLabelVisivle} id='vis' style={{ marginRight: '10px' }}>changeVisible</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
