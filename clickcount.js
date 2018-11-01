import React from 'react';
import ReactDOM from 'react-dom';

class Clickcount extends React.Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
    // es6でReact.Componentを作成した場合イベントハンドラでthisがundefinedになる。そのためthisをbindする必要があるらしい
        this.onClickButton = this.onClickButton.bind(this)
  }
  onClickButton(){
    // 変数countを宣言。名前がcountなので紛らわしいが、stateのcountとは同じではない
    let { count } = this.state
    this.setState({count: count + 1})
  }
  render() {
    return (
      <div>
        <h1>{`クリックした回数: ${this.state.count}`}</h1>
        <button onClick={this.onClickButton}>押す</button>
      </div>
    )
  }
}

export default Clickcount;
