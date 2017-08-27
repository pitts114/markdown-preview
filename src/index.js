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
  }

  update(str) {
    this.setState({markedStr: str})
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <TextBox/>
        </div>
      </div>
    )
  }
}

class TextBox extends React.Component {
  render() {
    return (
      <div class="col-xs-12 col-sm-6">
        <div class="form-group">
          <label for="code">Type Markdown here:</label>
          <br></br>
          <textarea class="form-control" rows="10" cols="40" id="code" onKeyPress={this.props.update}></textarea>
        </div>
      </div>
    )
  }
}

function MarkdownBox() {
  return (
    <h1>Hello World!</h1>
  )
}

ReactDOM.render(
  <App/>, document.getElementById('root'));
