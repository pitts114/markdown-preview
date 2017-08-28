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
    //parse markdown here
    this.setState({markedStr: str})
    console.log(str)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <TextBox value={this.state.markedStr} update={this.update} />
          <MarkdownBox output={this.state.markedStr}/>
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
            this.props.update(e.target.value)
          }} value={this.props.value}></textarea>
        </div>
      </div>
    )
  }
}

class MarkdownBox extends React.Component {
  render(){
  return (
    <div className="col-xs-12 col-sm-6">
      <div key={new Date().getTime()} dangerouslySetInnerHTML={{__html: marked(this.props.output)}} />
    </div>
  )
}
}

ReactDOM.render(
  <App/>, document.getElementById('root'));
