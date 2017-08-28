import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
var marked = require("marked")

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      markedStr: ''
    }
    this.update = this.update.bind(this)
  }
  update(str) {
    //parse markedown here
    this.setState({markedStr: str})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <TextBox value={this.state.markedStr} update={this.update} />
          <MarkdownBox/>
        </div>
      </div>
    )
  }
}

class TextBox extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-6 text-center">
        <div className="form-group">
          <label>Type Markdown here:</label>
          <br></br>
          <textarea className="form-control" rows="10" cols="40" id="code" onChange={(e)=>{
            console.log(e.target.value)
            this.props.update(e.target.value)
          }} value={this.props.value}></textarea>
        </div>
      </div>
    )
  }
}

function MarkdownBox() {
  return (
    <div className="col-xs-12 col-sm-6">
      <h1>Hello World!</h1>
    </div>
  )
}

ReactDOM.render(
  <App/>, document.getElementById('root'));
