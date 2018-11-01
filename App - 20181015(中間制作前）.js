import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './todos'
import Time from './time'
import Reddit from './reddit'
import Clickcount from './clickcount'

// コンポーネント作成テスト
function MyH1() {
  return (
    <h1>ToDolist実習</h1>
  )
}
// styleを指定した警告ボタンを表示するテスト
function Bt() {
  return (<button style={{color:"red"}}>警告ボタン</button>)
}
// メインコンポーネント
class App extends Component {
  // constructorの｛で囲んだものを初期化している？｝
  constructor() {
    super();
    this.state = {
      input: '',
      todos: [],// []以外を指定するとエラーが出る。配列の入れ物を作るときはこの記号を使わなければいけない？
    }; 
    // es6でReact.Componentを作成した場合イベントハンドラでthisがundefinedになる。そのためthisをbindする必要があるらしい
    this.addToDo = this.addToDo.bind(this)
    this.removeToDo = this.removeToDo.bind(this)
  }
  // サイドバーの色を背景と合わせて非表示っぽくするテスト。display要素いじった方が早いのでは
  bt2() {
    document.getElementById("sidebar").style.color = "white";
    document.getElementById("sidebar").style.backgroundColor = "white";
    }
  componentWillUnmount(){
    clearInterval(this.state.intervalId)
  }
  removeToDo(i){
    let { todos } = this.state
    todos = todos.slice(0, i).concat(todos.slice(i + 1))
    this.setState({todos:todos, input:""})
}
  // ここまで
// メソッドaddToDoを定義
  addToDo(){
    // letでtodos, input変数を宣言、this.stateで値を入れている？
    let { todos, input } = this.state
    // concat() メソッドは、配列に他の配列や値をつないでできた新しい配列を返します。
    todos = todos.concat(input)
    this.setState({todos:todos, input:"" ,time:new Date(),intervalId:""})
  }
  // 警告ボタン
  keikoku(){
    alert("test")
  }
  render() {    // 変数はここで宣言して使う
  var test3= { style:{color: 'red',backgroundColor: 'black',type:'button'} 
}
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> {/* コンポーネント呼び出しテスト */}<MyH1 /></p>
        </header>
        <div className="main">
          {/* 現在時刻を表示 */}<Time />
          {/* keikokuメソッドを呼び出してアラートを表示する */}<button onClick={this.keikoku}>警告ボタン</button>
          {/* 赤いボタンを表示するfunction呼び出し */}<Bt />
          {/* クリック回数をカウントするボタンを表示する */}<Clickcount />
          <button onClick={this.bt2}>sidebar消去ボタン</button>
          <input type="text" name="namae" size="40" maxlength="20"  value={this.state.input}
    onChange={(e) => this.setState({input: e.target.value})}/>
    {/* ボタンがクリックされたとき、addToDoが発火 */}
          <button onClick={this.addToDo}>追加</button>
          <h2>追加をクリックするとinputフォームに入力したデータが表示されます[{this.state.todos}]</h2>
          <ul>
            {this.state.todos.map((todo) => {return <li key={todo}>{todo}</li>})}
          </ul>
        <h2>削除可能なToDo:</h2>
                <Todo todos={this.state.todos} removeToDo={this.removeToDo} />
      {/* 変数テスト３でstyleを設定している */}
      <button {...test3}>test3</button>
      {/* JSXでのタグ内スタイルシートの書き方 */}
      <button className="btn btn-default" style={{color:"gray"}}>JSXでのタグ内スタイルシートの書き方メモ</button>
        {/* Reddit掲示板のAPIを読み込むテスト */}<Reddit />
        </div>
        {/* 色変更テスト用のdivを表示 */}
        <div id="sidebar">sidebarです</div>
      </div>
    );
  }
}


export default App;


