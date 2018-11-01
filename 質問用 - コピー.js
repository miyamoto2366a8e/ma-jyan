// 単なるボタン、先行は〇.後攻は×を表示する
function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      };
    }
  
    // 持っているデータ＝iのみ？
    handleClick(i) {
      const squares = this.state.squares.slice();
    //   もしcalculateWinnerの値がnull以外(決着がついた後)orsquares[i]のマス目に値が入っているのなら何もしない,違うのなら、マス目にXか〇を表示してターンを入れ替える
        // 超分かりにくい特殊なorの使い方。どちらかがtrueかどうかを判断している。詳細は
        // https://qiita.com/Imamotty/items/bc659569239379dded55
    if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }
  
    renderSquare(i) {
      return (
        <Square
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
  
      return (
        <div>
          <div className="status">{status}</div>
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
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
//   勝者判定。stateのsquaresの現在値は呼び出し元でsquares変数に代入されている。
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        // a,b,cの値にlinesの配列を入れる。0の時はa=0,b=1,c=2
      const [a, b, c] = lines[i];
    //   例：i=0 squaresの0個目の要素、つまり左上のマスの値と、上段中央のマス、右上のマスの値がすべて一致している場合
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        //   例：i=0 ならsquares0,つまりすべて一致した、勝者の文字を返す。XorO
        return squares[a];
      }
    }
    return null;
  }
  