import React, { Component } from 'react'
import Link from 'next/link'

export default class Nav extends Component {
  render () {
    return (
      <div>
        <Link href='/' ><a>Home</a></Link>
        <Link href='/Sell' ><a>Sell</a></Link>
      </div>
    )
  }
}
