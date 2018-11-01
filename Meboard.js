import React from "react";
// import ReactDOM from "react-dom"

//   Squareを９個作成して表示する、Squareに対して１～９のパターンのpropsを渡す。
// なぜこのクラスが必要なのか＝rendersquareを９個全部書くのが面倒だから
// なぜこのクラスをメインのAppクラス内のファンクションにしないのか＝機能の細分化のため？
class Mehyoji extends React.Component {
  render() {
    let img = this.props.no + ".gif"
    return (
      <button className="Metehai" onClick={this.props.onClick}>
      <img src={img}></img>
      </button>
    );
  }
}

export default class Meboard extends React.Component {
  renderMekawa(i) {
    return (
      // ↑のSquareコンポーネントの呼び出し、propsとしてValueとonClickを渡す
      <Mehyoji
        no={i}
      />
    );
  }
  render() {
    return (
      <div>
        {this.renderMekawa(this.props.mete[0])}
          {this.renderMekawa(this.props.mete[1])}
          {this.renderMekawa(this.props.mete[2])}
          {this.renderMekawa(this.props.mete[3])}
          {this.renderMekawa(this.props.mete[4])}
          {this.renderMekawa(this.props.mete[5])}
          {this.renderMekawa(this.props.mete[6])}
          {this.renderMekawa(this.props.mete[7])}
          {this.renderMekawa(this.props.mete[8])}
          {this.renderMekawa(this.props.mete[9])}
          {this.renderMekawa(this.props.mete[10])}
          {this.renderMekawa(this.props.mete[11])}
          {this.renderMekawa(this.props.mete[12])}
          {this.renderMekawa(this.props.mete[13])}
      </div>
    );
  }
}