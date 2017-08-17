/* global fetch */

import React from 'react'
import PropTypes from 'prop-types'
import Avatar from 'material-ui/Avatar'
import List, { ListItem, ListItemText } from 'material-ui/List'

class LinkList extends React.Component {
  /**
   * @constructor
   */
  constructor (props) {
    super(props)
    this.state = { links: [] }
  }

  /**
   * called before mounting
   */
  componentWillMount () {
    fetch(`${this.props.baseUrl}link.json`)
      .then(res => res.json())
      .then(links => this.setState({ links }))
  }

  /**
   * render
   * @returns {ReactElement} markup
   */
  render () {
    const { links } = this.state

    return (
      <List>
        {links
          ? links.map((link, i) =>
            <ListItem
              key={i}
              button
              component='a'
              target='_blank'
              href={link.address}
            >
              <Avatar src={link.avatar_url} />
              <ListItemText primary={link.name} secondary={link.text} />
            </ListItem>
          )
          : (<i>No link... for now</i>)
        }
      </List>
    )
  }
}

LinkList.PropTypes = {
  baseUrl: PropTypes.string
}

LinkList.defaultProps = {
  baseUrl: '/'
}

/**
 * LinkList Component
 */
export default LinkList
