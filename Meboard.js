import React from "react";
import Button from '@material-ui/core/Button';
// import ReactDOM from "react-dom"
import { LineChart, Line } from 'recharts';


class Bt extends React.Component {
  render() {
    return (
      <Button variant="contained" color="primary" className="turnbutton" onClick={this.props.onClick}>
        自捨
    </Button>
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
  rbutton(e){
    return (
      <Bt
        onClick={() => this.props.onClick(e)}
      />
    )
  }
  renderMekawa(i) {
    return (
      // ↑のSquareコンポーネントの呼び出し、propsとしてValueとonClickを渡す
      <Mehyoji
        no={i}
      />
    );
  }
  renderkawa(i) {
    return (
      // ↑のSquareコンポーネントの呼び出し、propsとしてValueとonClickを渡す
      <Kawa
        no={i}
      />
    );
  }
  render() {
    const data01 = 10
    const data02 = 20
    return (
      <div>
<PieChart width={730} height={250}>
  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
                <div className="kawa">
        {this.rbutton(4)}
        {this.renderkawa(this.props.mesute[0])}
          {this.renderkawa(this.props.mesute[1])}
          {this.renderkawa(this.props.mesute[2])}
          {this.renderkawa(this.props.mesute[3])}
          {this.renderkawa(this.props.mesute[4])}
          {this.renderkawa(this.props.mesute[5])}
          {this.renderkawa(this.props.mesute[6])}
          {this.renderkawa(this.props.mesute[7])}
          {this.renderkawa(this.props.mesute[8])}
          {this.renderkawa(this.props.mesute[9])}
          {this.renderkawa(this.props.mesute[10])}
          {this.renderkawa(this.props.mesute[11])}
          {this.renderkawa(this.props.mesute[12])}
          {this.renderkawa(this.props.mesute[13])}
          {this.renderkawa(this.props.mesute[14])}
          {this.renderkawa(this.props.mesute[15])}
          {this.renderkawa(this.props.mesute[16])}
          {this.renderkawa(this.props.mesute[17])}
          {this.renderkawa(this.props.mesute[18])}
          {this.renderkawa(this.props.mesute[19])}
        </div>
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