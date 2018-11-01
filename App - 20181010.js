import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// コンポーネント作成テスト
function MyH1() {
  return (
    <h1>ToDolist実習
    </h1>
  )
}

class App extends Component {
  // constructorの｛で囲んだものを初期化している？｝
  constructor() {
    super();
    this.state = {
      input: '',
      todos:[],
    }; 
    // addToDoの値をstateの内容にする。
    this.addToDo = this.addToDo.bind(this)
    // 時計用
    this.tick = this.tick.bind(this)
  }

  // 時計用
  tick(){
    let  time  = this.state
    time.setSeconds(time.getSeconds() + 1)
    this.setState({time: time})
  }
  componentDidMount(){
    let id = setInterval(this.tick, 1000)
    this.setState({intervalId: id})
  }

  componentWillUnmount(){
    clearInterval(this.state.intervalId)
  }
  // ここまで
// メソッドaddToDoを定義
  addToDo(){
    // letでtodos, input変数を宣言、this.stateで値を初期化している？
    let { todos, input } = this.state
    // concat() メソッドは、配列に他の配列や値をつないでできた新しい配列を返します。
    todos = todos.concat(input)
    this.setState({todos:todos, input:"" ,time:new Date(),intervalId:""})
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          <p>
            {/* コンポーネント呼び出しテスト */}
            <MyH1 />
            </p>
        </header>
        <div className="main">
          <p>test</p>
          <input type="text" name="namae" size="40" maxlength="20"  value={this.state.input}
    onChange={(e) => this.setState({input: e.target.value})}/>
    {/* ボタンがクリックされたとき、addToDoが発火 */}
          <button onClick={this.addToDo}>追加</button>
          <h2>追加をクリックするとinputフォームに入力したデータが表示されます[{this.state.todos}]</h2>
          <ul>
            {this.state.todos.map((todo) => {return <li key={todo}>{todo}</li>})}
          </ul>
          <h2>現在の時間</h2>
        <span>今の時間 {this.state.time.toLocaleTimeString()}</span>
        </div>
      </div>
    );
  }
}


export default App;


