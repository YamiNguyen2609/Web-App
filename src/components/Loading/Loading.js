import React, { Component } from 'react'
import { SyncLoader } from 'react-spinners'

import { Metrics, Colors } from '../../themes'

export default class Loading extends Component {
  render() {
    const {
      visible,
      backdropColor = 'transparent',
      color = Colors.appLightGrayColor,
      size = 20
    } = this.props
    return (
      <div
        className='sweet-loading'
        style={{
          backgroundColor: backdropColor,
          position: 'absolute',
          borderRadius: Metrics.borderRadius.regular,
          top: Metrics.windowHeight / 2.5,
          left: Metrics.windowWidth / 2,
          alignItems: 'center'
        }}
      >
        <SyncLoader
          css={{ display: 'block', margin: 0 }}
          sizeUnit={'px'}
          size={size}
          color={color}
          loading={visible}
        />
      </div>
    )
  }
}
