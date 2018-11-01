import React, { Component } from 'react';
import logo from './logo.svg';

// ボタンを表示する。これを９個表示して１つのボードを作る
function Square(props) {
    return (
      //<button className="square" onClick={i => this.handleClick(i)}>
      // squareというボタンを作ります。クリックされたとき、iの値をhandleClickに渡します。
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
//   Squareを９個表示する、Squareに対して１～９のパターンのpropsを渡す
// 渡されたデータ
// squares={current.squares}
// onClick={i => this.handleClick(i)}
class Board extends React.Component {
renderSquare(i) {
      return (
        // ↑のSquareコンポーネントの呼び出し、propsとしてValueとonClickを渡す
        <Square
          value={this.props.squares[i]}
          // =value={squares={current.squares}[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // 履歴表示用state,プロパティ。historyの初期設定をNULL９個に設定する、ついでに後に使うsquaresプロパティを定義している
        // 要はstate定義と同時にプロパティ定義をしている?
        // 定義した後はどうなる？
        // 変数historyを宣言、値は配列、１つ目の配列の中身はnullを９個作るarray
        history: [{squares: Array(9).fill(null)}],
        stepNumber: 0,
        // 先行後攻判断用state
        xIsNext: true
      };
    }
    handleClick(i) {
      // ↑で作ったhistorystateの０から１の値(２個)を取りだす。（※一週目の場合）おそらくstepNumberが１ずつ増えるだろう
      // これが使われる＝この時点で既にhistorystateには二個以上の配列が存在する。つまりこの時点で上記squaresプロパティは実行されている
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
    // currentにhistoryの長さｰ1個目の要素を挿入。一週目なら０番目（１個目）の要素が入る。currentの意味は現在。
    // historyの０個目の要素を呼び出す。つまり初回ならNULL
    // historyには９個のマス目を毎回作っている。currentで今のターン数を管理している？
      const current = history[history.length - 1];
      // 変数squaresを定義、代入のためプロパティsquaresを呼び出す。
      // つまりconst squares = current.Array(9).fill(null).slice();
      const squares = current.squares.slice();
            //   もしcalculateWinnerの値がnull以外(決着がついた後)orsquares[i]のマス目に値が入っているのなら何もしない,違うのなら、マス目にXか〇を表示してターンを入れ替える
          // 超分かりにくい特殊なorの使い方。どちらかがtrueかどうかを判断している。詳細は
          // https://qiita.com/Imamotty/items/bc659569239379dded55
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        history: history.concat([
          {
            squares: squares
          }
        ]),
        // stepNumberにhistoryの長さ＝９を入れる
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }
  
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
  
      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });
  
      let status;
      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }
  // 実際に表示するもの
      return (
        <div className="game">
          <div className="game-board">
          {/* Boardに対してpropsを渡す */}
          {/* 訳：現在のボード状況を渡すから表示しろ。クリックしたらiをハンドルクリックメソッドへ渡せ */}
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(<Game />, document.getElementById("root"));
  //   勝者判定。state.squaresは呼び出し元でsquares変数に代入されている。
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    // length=文字列の長さや配列の要素数を取得することができるプロパティ、linesの要素数以下の時ループするfor文
    for (let i = 0; i < lines.length; i++) {
              // a,b,cの値にlinesの配列を入れる。0の時はa=0,b=1,c=2
      const [a, b, c] = lines[i];
          //   例：i=0 squaresの0個目の要素、つまり左上のマスの値と、上段中央のマス、右上のマスの値がすべて一致している場合
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                //   例：どこか一列が揃った勝者の文字を返す。XorO
        return squares[a];
      }
    }
    return null;
  }
  