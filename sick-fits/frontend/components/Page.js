import React, { Component } from 'react'
import Header from './Header'
import PropTypes from 'prop-types'
import Meta from './Meta';

class Page extends Component {
  static propTypes = {
    children: PropTypes.object,
  }
  render () {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Page
