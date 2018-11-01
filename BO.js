import React from "react";
// import ReactDOM from "react-dom"

//   Squareを９個作成して表示する、Squareに対して１～９のパターンのpropsを渡す。
// なぜこのクラスが必要なのか＝rendersquareを９個全部書くのが面倒だから
// なぜこのクラスをメインのAppクラス内のファンクションにしないのか＝機能の細分化のため？
export default class Board extends React.Component {
  // props 
  // squares={current.squares}
  // onClick={i => this.handleClick(i)}
  renderSquare(i) 
    return (
      // ↑のSquareコンポーネントの呼び出し、propsとしてValueとonClickを渡す
      <Square
        value={this.props.squares[i]}
        // =value={squares={current.squares}[i]}
        onClick={() => this.props.onClick(i)}
        no={i}
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
          {this.renderSquare(3)}
          {this.renderSquare(36)}
          {this.renderSquare(37)}
          {this.renderSquare(38)}
          {this.renderSquare(39)}
          {this.renderSquare(72)}
          {this.renderSquare(73)}
          {this.renderSquare(74)}
          {this.renderSquare(75)}
          {this.renderSquare(108)}
          {this.renderSquare(109)}
          {this.renderSquare(110)}
          {this.renderSquare(111)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(40)}
          {this.renderSquare(41)}
          {this.renderSquare(42)}
          {this.renderSquare(43)}
          {this.renderSquare(76)}
          {this.renderSquare(77)}
          {this.renderSquare(78)}
          {this.renderSquare(79)}
          {this.renderSquare(116)}
          {this.renderSquare(117)}
          {this.renderSquare(118)}
          {this.renderSquare(119)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(44)}
          {this.renderSquare(45)}
          {this.renderSquare(46)}
          {this.renderSquare(47)}
          {this.renderSquare(80)}
          {this.renderSquare(81)}
          {this.renderSquare(82)}
          {this.renderSquare(83)}
          {this.renderSquare(112)}
          {this.renderSquare(113)}
          {this.renderSquare(114)}
          {this.renderSquare(115)}
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(48)}
          {this.renderSquare(49)}
          {this.renderSquare(50)}
          {this.renderSquare(51)}
          {this.renderSquare(84)}
          {this.renderSquare(85)}
          {this.renderSquare(86)}
          {this.renderSquare(87)}
          {this.renderSquare(120)}
          {this.renderSquare(121)}
          {this.renderSquare(122)}
          {this.renderSquare(123)}
        </div>
        <div className="board-row">
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(52)}
          {this.renderSquare(53)}
          {this.renderSquare(54)}
          {this.renderSquare(55)}
          {this.renderSquare(88)}
          {this.renderSquare(89)}
          {this.renderSquare(90)}
          {this.renderSquare(91)}
          {this.renderSquare(124)}
          {this.renderSquare(125)}
          {this.renderSquare(126)}
          {this.renderSquare(127)}
        </div>
        <div className="board-row">
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(56)}
          {this.renderSquare(57)}
          {this.renderSquare(58)}
          {this.renderSquare(59)}
          {this.renderSquare(92)}
          {this.renderSquare(93)}
          {this.renderSquare(94)}
          {this.renderSquare(95)}
          {this.renderSquare(128)}
          {this.renderSquare(129)}
          {this.renderSquare(130)}
          {this.renderSquare(131)}
        </div>
        <div className="board-row">
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
          {this.renderSquare(60)}
          {this.renderSquare(61)}
          {this.renderSquare(62)}
          {this.renderSquare(63)}
          {this.renderSquare(96)}
          {this.renderSquare(97)}
          {this.renderSquare(98)}
          {this.renderSquare(99)}
          {this.renderSquare(132)}
          {this.renderSquare(133)}
          {this.renderSquare(134)}
          {this.renderSquare(135)}
        </div>
        <div className="board-row">
          {this.renderSquare(28)}
          {this.renderSquare(29)}
          {this.renderSquare(30)}
          {this.renderSquare(31)}
          {this.renderSquare(64)}
          {this.renderSquare(65)}
          {this.renderSquare(66)}
          {this.renderSquare(67)}
          {this.renderSquare(100)}
          {this.renderSquare(101)}
          {this.renderSquare(102)}
          {this.renderSquare(103)}

        </div>
        <div className="board-row">
          {this.renderSquare(32)}
          {this.renderSquare(33)}
          {this.renderSquare(34)}
          {this.renderSquare(35)}
          {this.renderSquare(68)}
          {this.renderSquare(69)}
          {this.renderSquare(70)}
          {this.renderSquare(71)}
          {this.renderSquare(104)}
          {this.renderSquare(105)}
          {this.renderSquare(106)}
          {this.renderSquare(107)}

        </div>
      </div>
    );
  }
}
class Kawa extends React.Component {
  render() {
      let img = this.props.no + ".gif"
    return (
      // let img = this.props.no + ".gif"
      // const hyoji = (this.props.value == 1) ? <img src={img}></img> : <img src="500.gif"></img>;
        //<button className="square" onClick={i => this.handleClick(i)}>
        // squareというボタンを作ります。クリックされたとき、iの値をhandleClickに渡します。
        // <button className="kawa" onClick={this.props.onClick}>
        //   {hyoji}
        // </button>
        <img src={img}></img>
    );
  }
}

class Kawaboard extends React.Component {
  renderkawa(i) {
    return (
      // ↑のSquareコンポーネントの呼び出し、propsとしてValueとonClickを渡す
      <Kawa
        no={i}
      />
    );
  }
  render() {
    return (
      //<button className="square" onClick={i => this.handleClick(i)}>
      // squareというボタンを作ります。クリックされたとき、iの値をhandleClickに渡します。
      <div>
        <div>
      {this.renderkawa(this.props.p1te[0])}
      {this.renderkawa(this.props.p1te[1])}
      {this.renderkawa(this.props.p1te[2])}
      {this.renderkawa(this.props.p1te[3])}
      {this.renderkawa(this.props.p1te[4])}
      {this.renderkawa(this.props.p1te[5])}
      {this.renderkawa(this.props.p1te[6])}
      {this.renderkawa(this.props.p1te[7])}
      {this.renderkawa(this.props.p1te[8])}
      {this.renderkawa(this.props.p1te[9])}     
        </div> 
        <div>
            {this.renderkawa(this.props.p1te[10])}
            {this.renderkawa(this.props.p1te[11])}
            {this.renderkawa(this.props.p1te[12])}
            {this.renderkawa(this.props.p1te[13])}
            {this.renderkawa(this.props.p1te[14])}
            {this.renderkawa(this.props.p1te[15])}
            {this.renderkawa(this.props.p1te[16])}
            {this.renderkawa(this.props.p1te[17])}
            {this.renderkawa(this.props.p1te[18])}
            {this.renderkawa(this.props.p1te[19])}
          </div>
          <div>
      {this.renderkawa(this.props.p2te[0])}
      {this.renderkawa(this.props.p2te[1])}
      {this.renderkawa(this.props.p2te[2])}
      {this.renderkawa(this.props.p2te[3])}
      {this.renderkawa(this.props.p2te[4])}
      {this.renderkawa(this.props.p2te[5])}
      {this.renderkawa(this.props.p2te[6])}
      {this.renderkawa(this.props.p2te[7])}
      {this.renderkawa(this.props.p2te[8])}
      {this.renderkawa(this.props.p2te[9])}     
        </div> 
        <div>
            {this.renderkawa(this.props.p2te[10])}
            {this.renderkawa(this.props.p2te[11])}
            {this.renderkawa(this.props.p2te[12])}
            {this.renderkawa(this.props.p2te[13])}
            {this.renderkawa(this.props.p2te[14])}
            {this.renderkawa(this.props.p2te[15])}
            {this.renderkawa(this.props.p2te[16])}
            {this.renderkawa(this.props.p2te[17])}
            {this.renderkawa(this.props.p2te[18])}
            {this.renderkawa(this.props.p2te[19])}
          </div>
          <div>
      {this.renderkawa(this.props.p3te[0])}
      {this.renderkawa(this.props.p3te[1])}
      {this.renderkawa(this.props.p3te[2])}
      {this.renderkawa(this.props.p3te[3])}
      {this.renderkawa(this.props.p3te[4])}
      {this.renderkawa(this.props.p3te[5])}
      {this.renderkawa(this.props.p3te[6])}
      {this.renderkawa(this.props.p3te[7])}
      {this.renderkawa(this.props.p3te[8])}
      {this.renderkawa(this.props.p3te[9])}     
        </div> 
        <div>
            {this.renderkawa(this.props.p3te[10])}
            {this.renderkawa(this.props.p3te[11])}
            {this.renderkawa(this.props.p3te[12])}
            {this.renderkawa(this.props.p3te[13])}
            {this.renderkawa(this.props.p3te[14])}
            {this.renderkawa(this.props.p3te[15])}
            {this.renderkawa(this.props.p3te[16])}
            {this.renderkawa(this.props.p3te[17])}
            {this.renderkawa(this.props.p3te[18])}
            {this.renderkawa(this.props.p3te[19])}
          </div>
      </div>
      
    );
  }
}
