import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// メインコンポーネント
class App extends Component {
  // constructorの｛で囲んだものを初期化している？｝
  constructor() {
    super()
    this.state = {
      m1a: 0
    }
    // es6でReact.Componentを作成した場合イベントハンドラでthisがundefinedになる。そのためthisをbindする必要があるらしい
    this.onClickButton = this.onClickButton.bind(this)
  }
  onClickButton(){
    let { m1a } = this.state
    this.setState({m1a: m1a + 1})
  }
  render() {    // 変数はここで宣言して使う
    let foo = <img src="img/1.jpg" width="60px" height="100px"></img>
    // let zero = this.setState({m1a:m1a -10})
    // let hantei = (this.state.m1a > 2) ? zero : ""
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>中間制作</p>
        </header>
        <div className="main">
        {/* <button 
          <Hyoji no='m1a'/> */}
          <button onClick={this.onClickButton}>
          {/* =を使うとstateに値が入ってしまう。==を使うこと */}
          {(this.state.m1a == 1 ) ? foo : "捨"}</button>
          <h1>{`クリックした回数: ${this.state.m1a}`}</h1>
        </div>
      </div>
    );
  }
}


export default App;

