import React, { Component } from 'react';
import './App.css';
import Board from './Board.js';
import Kawaboard from './Kawaboard.js';
import Meboard from './Meboard.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 履歴表示用state,プロパティ。historyの初期設定をNULL９個に設定する、ついでに後に使うsquaresプロパティを定義している
      // 要はstate定義と同時にプロパティ定義をしている?
      // 定義した後はどうなる？
      // 変数historyを宣言、値は配列、１つ目の配列の中身はnullを９個作るarray
      history: [{ squares: Array(136).fill(1) }],
      stepNumber: 0,
      turn: -14,
      turnp: "プレイヤー１",
      // プレイヤー１の捨て牌
      p1te: [],
      p2te: [],
      p3te: [],
      mete: [],
      // プレイヤー１の鳴き牌
      p1naki: [],
      p2naki: [],
      p3naki: [],
      menaki: [],
      navi: "まず手牌を13枚選んでください",
      kabe:Array(34),
      // p1tehyoji: Array(14).fill(2),
      countm: "",
      counts: "",
      countp: "",
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
    const squares = current.squares.slice();
    // ターンプレイヤー確認用state
    let turn = this.state.turn;
    // 上家の捨て牌、下のswitch文でpush,iの数値（牌種類）が入っている[牌A,牌B]
    const p1te = this.state.p1te;
    const p1naki = this.state.p1naki;
    const p2te = this.state.p2te;
    const p3te = this.state.p3te;
    const mete = this.state.mete;
    let navi = this.state.navi;
    let turnp = this.state.turnp;
    turn = (turn == 3) ? 0 : turn + 1;
    switch (turn) {
      case -1:
      turnp = "プレイヤー1";
      break;
      case 0:
      turnp = "プレイヤー2";
      break;
      case 1:
      turnp = "プレイヤー3";
      break;
      case 3:
      turnp = "プレイヤー1";
      break;
      default:
        turnp = "自分";
        break;
    }
    switch (turn) {
      case 0:
        p1te.push(i);
        break;
      case 1:
        p2te.push(i);
        break;
      case 2:
        p3te.push(i);
        break;
      case 3:
      case -1:
      case -2:
      case -3:
      case -4:
      case -5:
      case -6:
      case -7:
      case -8:
      case -9:
      case -10:
      case -11:
      case -12:
      case -13:
        mete.push(i);
        break;
    }
    //   もしcalculateWinnerの値がnull以外(決着がついた後)orsquares[i]のマス目に値が入っているのなら何もしない,違うのなら、マス目にXか〇を表示してターンを入れ替える
    // 超分かりにくい特殊なorの使い方。どちらかがtrueかどうかを判断している。詳細は
    // https://qiita.com/Imamotty/items/bc659569239379dded55
    squares[i] = (squares[i] == 1) ? 2 : 1;
    navi = (turn >= -1) ? "次の指示" : "まずは手牌を13枚選択してください";
    // 捨て牌ソート
    var a = mete;
    var c = p1te;
    var e = p2te;
    var g = p3te;
    a.sort(function (a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    c.sort(function (c, d) {
      if (c < d) return -1;
      if (c > d) return 1;
      return 0;
    });
    e.sort(function (e, f) {
      if (e < f) return -1;
      if (e > f) return 1;
      return 0;
    });
    g.sort(function (g, h) {
      if (g < h) return -1;
      if (g > h) return 1;
      return 0;
    });
    // ここまで
    // 四枚切れた牌を判定します
    let kabe = this.state.kabe;
    if (squares[0] ===2 && squares[1] ===2 && squares[2] ===2 && squares[3] ===2 ) {kabe[0] = "0.gif"};
    if (squares[4] ===2 && squares[5] ===2 && squares[6] ===2 && squares[7] ===2 ) {kabe[1] = "4.gif"};
    if (squares[8] ===2 && squares[9] ===2 && squares[10] ===2 && squares[11] ===2 ) {kabe[2] = "8.gif"};
    if (squares[12] ===2 && squares[13] ===2 && squares[14] ===2 && squares[15] ===2 ) {kabe[3] = "12.gif"};
    if (squares[16] ===2 && squares[17] ===2 && squares[18] ===2 && squares[19] ===2 ) {kabe[4] = "16.gif"};
    if (squares[20] ===2 && squares[21] ===2 && squares[22] ===2 && squares[23] ===2 ) {kabe[5] = "20.gif"};
    if (squares[24] ===2 && squares[25] ===2 && squares[26] ===2 && squares[27] ===2 ) {kabe[6] = "24.gif"};
    if (squares[28] ===2 && squares[29] ===2 && squares[30] ===2 && squares[31] ===2 ) {kabe[7] = "28.gif"};
    if (squares[32] ===2 && squares[33] ===2 && squares[34] ===2 && squares[35] ===2 ) {kabe[8] = "32.gif"};
    if (squares[36] ===2 && squares[37] ===2 && squares[38] ===2 && squares[39] ===2 ) {kabe[9] = "36.gif"};
    if (squares[40] ===2 && squares[41] ===2 && squares[42] ===2 && squares[43] ===2 ) {kabe[10] = "40.gif"};
    if (squares[44] ===2 && squares[45] ===2 && squares[46] ===2 && squares[47] ===2 ) {kabe[11] = "44.gif"};
    if (squares[48] ===2 && squares[49] ===2 && squares[50] ===2 && squares[51] ===2 ) {kabe[12] = "48.gif"};
    if (squares[52] ===2 && squares[53] ===2 && squares[54] ===2 && squares[55] ===2 ) {kabe[13] = "52.gif"};
    if (squares[56] ===2 && squares[57] ===2 && squares[58] ===2 && squares[59] ===2 ) {kabe[14] = "56.gif"};
    if (squares[60] ===2 && squares[61] ===2 && squares[62] ===2 && squares[63] ===2 ) {kabe[15] = "60.gif"};
    if (squares[64] ===2 && squares[65] ===2 && squares[66] ===2 && squares[67] ===2 ) {kabe[16] = "64.gif"};
    if (squares[68] ===2 && squares[69] ===2 && squares[70] ===2 && squares[71] ===2 ) {kabe[17] = "68.gif"};
    if (squares[72] ===2 && squares[73] ===2 && squares[74] ===2 && squares[75] ===2 ) {kabe[18] = "72.gif"};
    if (squares[76] ===2 && squares[77] ===2 && squares[78] ===2 && squares[79] ===2 ) {kabe[19] = "76.gif"};
    if (squares[80] ===2 && squares[81] ===2 && squares[82] ===2 && squares[83] ===2 ) {kabe[20] = "80.gif"};
    if (squares[84] ===2 && squares[85] ===2 && squares[86] ===2 && squares[87] ===2 ) {kabe[21] = "84.gif"};
    if (squares[88] ===2 && squares[89] ===2 && squares[90] ===2 && squares[91] ===2 ) {kabe[22] = "88.gif"};
    if (squares[92] ===2 && squares[93] ===2 && squares[94] ===2 && squares[95] ===2 ) {kabe[23] = "92.gif"};
    if (squares[96] ===2 && squares[97] ===2 && squares[98] ===2 && squares[99] ===2 ) {kabe[24] = "96.gif"};
    if (squares[100] ===2 && squares[101] ===2 && squares[102] ===2 && squares[103] ===2 ) {kabe[25] = "100.gif"};
    if (squares[104] ===2 && squares[105] ===2 && squares[106] ===2 && squares[107] ===2 ) {kabe[26] = "104.gif"};
    if (squares[108] ===2 && squares[109] ===2 && squares[110] ===2 && squares[111] ===2 ) {kabe[27] = "108.gif"};
    if (squares[112] ===2 && squares[113] ===2 && squares[114] ===2 && squares[115] ===2 ) {kabe[28] = "112.gif"};
    if (squares[116] ===2 && squares[117] ===2 && squares[118] ===2 && squares[119] ===2 ) {kabe[29] = "116.gif"};
    if (squares[120] ===2 && squares[121] ===2 && squares[122] ===2 && squares[123] ===2 ) {kabe[30] = "120.gif"};
    if (squares[124] ===2 && squares[125] ===2 && squares[126] ===2 && squares[127] ===2 ) {kabe[31] = "124.gif"};
    if (squares[128] ===2 && squares[129] ===2 && squares[130] ===2 && squares[131] ===2 ) {kabe[32] = "128.gif"};
    if (squares[132] ===2 && squares[133] ===2 && squares[134] ===2 && squares[135] ===2 ) {kabe[33] = "132.gif"};
    let countm = 0;
    let counts = 0;
    let countp = 0;
    for (var a = 0;  a < 36; a++) {
      if(squares[a] == 1){
          countm++;
      }
  }
  for (var b = 36;  b < 72; b++) {
    if(squares[b] == 1){
        counts++;
    }
}
for (var c = 72;  c < 108; c++) {
  if(squares[c] == 1){
      countp++;
  }
}
    
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      // stepNumberにhistoryの長さ＝９を入れる
      stepNumber: history.length,
      turn: turn,
      turnp: turnp,
      p1te: p1te,
      p2te: p2te,
      p3te: p3te,
      mete: mete,
      navi: navi,
      countm: countm,
      counts: counts,
      countp: countp,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

// ボタンを押すと、押したプレイヤーのターンになる。ポン、チー用
  turnchange() {
    let aaaa = this.state.turn;
    aaaa = 0;
    this.setState({
      turn: aaaa,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

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
    // switch(this.state.p1te[a]){
    //   case null:
    //   p1tehyoji = this.state.p1te + ".gif";
    //   break;
    // }

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
        <div className="sub">
          <p>{this.state.navi}</p>
          <p>{this.state.turnp}の牌を選択中</p>
          <p>萬子残り{this.state.countm}枚</p>
          <p>索子残り{this.state.counts}枚</p>
          <p>筒子残り{this.state.countp}枚</p>
          <Kawaboard
            // onClick={i => this.handleClick(i)}
            p1te={this.state.p1te}
            p2te={this.state.p2te}
            p3te={this.state.p3te}
          />
          <Meboard
            mete={this.state.mete}
          />
          {/* <img src={this.state.p1tehyoji[0]}></img> */}
          <p>{this.state.p1te}</p>
          <p>{this.state.p2te}</p>
          <p>{this.state.p3te}</p>
          <p>{this.state.mete}</p>
          <button className="button1" onClick={this.turnchange.bind(this)}>
            P1
      </button>
      <button className="button2" onClick="">
            <img src={this.state.kabe}></img>
      </button>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      </div>

    );
  }
}


//   勝者判定。state.squaresは呼び出し元でsquares変数に代入されている。
// function calculateWinner(squares) {
//   if (squares[i] == 1) {
//       squares[i] == 2;
//   }
//   squares[i]==3;
// }

export default App;
