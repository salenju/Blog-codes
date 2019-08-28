import React, { Component } from 'react'
import { Empty } from 'antd'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const rowDown = count => {
  /**
   * @param {Number} count  props.children的length
   */

  let stepLength = Math.floor(100 / count) // 依据count计算每次滚动的步长（所占百分比）
  let crollStepLength = Math.ceil(stepLength / count) // 计算每次执行滚动的步长（所占百分比）
  let waitStepLength = stepLength - crollStepLength

  let arr = [
    `0%{-webkit-transform: translateY(-${count *
    32}px);transform: translateY(-${count * 32}px);}`
  ]

  for (let i = 1; i <= count; i++) {
    let waitKeyFram = `${(i - 1) * stepLength +
      waitStepLength}% {-webkit-transform: translateY(-${(count + 1 - i) *
      32}px);transform: translateY(-${(count + 1 - i) * 32}px);}`
    let runKeyFram = `${stepLength *
      i}% {-webkit-transform: translateY(-${(count - i) *
      32}px);transform: translateY(-${(count - i) * 32}px);}`
    arr = [...arr, waitKeyFram, runKeyFram]
  }

  let str = arr.join('')
  return keyframes`${str}`
}

class _RowCroll04 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rollClass: '',
      count: 0,
      duration: 0
    }
  }

  componentDidMount() {
    if (this.props.children.length > this.props.startCrollCount) {
      this.setState({
        rollClass: 'row-down',
        count: this.props.children.length - this.props.startCrollCount,
        duration: this.props.children.length * this.props.time
      })
    }
  }

  render() {
    return (
      <div>
        {this.props.children.length !== 0 ? (
          <RowCrollContainer
            duration={this.state.duration}
            count={this.state.count}
            {...this.props}
          >
            <div
              className="scroll"
              style={{ height: (this.props.startCrollCount* 32) || 160, overflow: 'hidden' }}
            >
              <div className={this.state.rollClass}>{this.props.children}</div>
            </div>
          </RowCrollContainer>
        ) : (
            <Empty />
          )}
      </div>
    )
  }
}

const RowCrollContainer = styled('div')`
  .row-down {
    -webkit-animation: ${props => props.duration * 1000}ms
      ${props => rowDown(props.count)} ease-out infinite normal;
    animation: ${props => props.duration * 1000}ms
      ${props => rowDown(props.count)} ease-out infinite normal;
  }
`

_RowCroll04.propTypes = {
  startCrollCount: PropTypes.number,
  time: PropTypes.number.isRequired,
  children: PropTypes.array
}

export default _RowCroll04
