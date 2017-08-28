import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
var marked = require("marked")

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      markedStr: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
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
      <div className="col-xs-12 col-sm-6">
        <div className="form-group">
          <label>Type Markdown here:</label>
          <br></br>
          <textarea className="form-control" rows="33" cols="40" id="code" onChange={(e)=>{
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
    <div id="preview" className="col-xs-12 col-sm-6">
    <div className="form-group">
      <label className="">View Markdown Here:</label>
      <div key={new Date().getTime()} dangerouslySetInnerHTML={{__html: marked(this.props.output)}} />
    </div>
  </div>
  )
}
}

ReactDOM.render(
  <App/>, document.getElementById('root'));
