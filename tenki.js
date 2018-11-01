import React from "react";
import ReactDOM from "react-dom"
import fetch from 'isomorphic-fetch'

export default class Tenki extends React.Component {
  constructor() {
    super();
    this.state = {
      items:[],
    }; 
  }
  componentWillMount(){
    fetch("http://weather.livedoor.com/forecast/webservice/json/v1")
      .then(response => response.json())
      .then(json => {
        let items = json.data.children.map(item =>{
          return item.data
        })
        this.setState({items})
      })
  }
  render(){
    return(
      <div>
      <h1>Reddit ニュー速R</h1>
      <ul>
      {this.state.items.map((item) => {
        return <li key={item.permalink}><a href={`http://weather.livedoor.com/forecast/webservice/json/v1${item.permalink}`}>{item.title}</a></li>
      })}
      </ul>
      </div>
    )
  }
}
