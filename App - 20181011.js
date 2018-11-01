import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './todos'
import fetch from 'isomorphic-fetch'

// コンポーネント作成テスト
function MyH1() {
  return (
    <h1>ToDolist実習
    </h1>
  )
}

function Bt() {
  return (
    <button style={{color:"red"}}>警告ボタン</button>
  )
}



class App extends Component {
  // constructorの｛で囲んだものを初期化している？｝
  constructor() {
    super();
    this.state = {
      items:[],
      input: '',
      todos:[],
      time: new Date(),
      intervalId: "",
      test: "",
      test2:'<button style={{color:"red"}}>test</button>',
    }; 
    // addToDoの値をstateの内容にする。
    this.addToDo = this.addToDo.bind(this)
    // 時計用
    this.tick = this.tick.bind(this)
    this.removeToDo = this.removeToDo.bind(this)
  }

  bt2() {
    document.getElementById("sidebar").style.color = "white";
    document.getElementById("sidebar").style.backgroundColor = "white";
    }
  // 時計用
  tick(){
    let { time } = this.state
    time.setSeconds(time.getSeconds() + 1)
    this.setState({time: time})
  }
  componentDidMount(){
    let id = setInterval(this.tick, 1000)
    this.setState({intervalId: id})
  } 
  componentWillMount(){
    fetch("https://www.reddit.com/r/newsokur/.json")
      .then(response => response.json())
      .then(json => {
        let items = json.data.children.map(item =>{
          return item.data
        })
        this.setState({items})
      })
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

  render() {
    // 変数はここで宣言して使う
  var test3= { 
    style:{
    color: 'red',
    backgroundColor: 'black',
    type:'button'
  } 
}
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
          <button onClick={this.keikoku}>警告ボタン</button>
          <Bt />
          <button onClick={this.bt2}>sidebar消去ボタン</button>
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
        <h2>削除可能なToDo:</h2>
                <Todo todos={this.state.todos} removeToDo={this.removeToDo} />
                {this.state.test2}
      {/* 変数テスト３でstyleを設定したボタンが表示される */}
      <button {...test3}>test3</button>
      {/* JSXでのタグ内スタイルシートの書き方 */}
      <button className="btn btn-default" style={{color:"gray"}}>test</button>
        <h1>Reddit ニュー速R</h1>
        <ul>
        {this.state.items.map((item) => {
          return <li key={item.permalink}><a href={`https://www.reddit.com${item.permalink}`}>{item.title}</a></li>
        })}
        </ul>
        </div>
        <div id="sidebar">sidebarです</div>
      </div>
    );
  }
}


export default App;


