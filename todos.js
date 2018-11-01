import React from "react";
// import ReactDOM from "react-dom"


export default class Todo extends React.Component {
  render(){
    // 値が変化しないtodosという変数をpropsに入れている。propsなのでこちらも変更不可
    const { todos } = this.props
    return(
        <ul>
          {/* 「map」は、配列のデータ1つずつに対してアクセスする */}
        {todos.map((todo, i) =>{
          return(
            <li key={todo} onClick={e => this.props.removeToDo(i)}>{todo}</li>
          )
        })}
        </ul>
    )
  }
}
