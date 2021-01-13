import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: ''
    }
  }
  componentDidMount() {
    axios('/test')
    .then(res =>{
      console.log(res.data)
    })
  }
  render() {
    return (
      <div>
        React test!
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))