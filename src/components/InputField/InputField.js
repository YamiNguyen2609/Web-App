import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

export default class InputField extends Component {
  render() {
    const { margin = 'normal', variant = 'outlined' } = this.props
    return <TextField {...this.props} margin={margin} variant={variant} />
  }
}
