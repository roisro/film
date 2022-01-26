import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import {connect} from 'react-redux'

class App extends Component {
  render () {
    return (
      <div>
      <Button primary>test Semantic UI {this.props.contobae}</Button>
    </div>
    );}  
}

const contohcuy = (sampel) => {
  return {
    contobae : sampel.conto
  }
}


export default connect(contohcuy) (App);