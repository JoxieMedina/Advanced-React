import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const ALL_ITEMS_QUERY = gql`

query ALL_ITEMS_QUERY {
    items {
        id
        title
        price
        description
        image
        largeImage
    }
}
`

class Items extends Component {
  renderItem = payload => {
    console.log(payload)
    return (
      <p>child items</p>
    )
  }
  render () {
    return (
      <div>
        <Query query={ALL_ITEMS_QUERY}>
          {this.renderItem}
        </Query>
      </div>
    )
  }
}

export default Items
