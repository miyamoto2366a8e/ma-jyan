import React from "react";
import Button from '@material-ui/core/Button';
// import ReactDOM from "react-dom"

//   Squareを９個作成して表示する、Squareに対して１～９のパターンのpropsを渡す。
// なぜこのクラスが必要なのか＝rendersquareを９個全部書くのが面倒だから
// なぜこのクラスをメインのAppクラス内のファンクションにしないのか＝機能の細分化のため？
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

export default class Kawaboard extends React.Component {
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
        <Button variant="contained" color="primary" className="turnbutton">
        下家
    </Button>
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
        <Button variant="contained" color="primary" className="turnbutton">
        対面
    </Button>
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
          上家：
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