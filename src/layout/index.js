import React, { Component } from 'react'
import Header from '../containers/header'
import Body from '../containers/body'
import Footer from '../containers/footer'

export default class index extends Component {
  render() {
    return (
      <div id='root'>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}
