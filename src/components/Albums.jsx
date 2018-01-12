import React from 'react'
import { Col, Row } from 'react-flexbox-grid'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import PropTypes from 'prop-types'

import { accent } from '../styles/Colors'

function Categories(props) {
  return (
    <Col className="menu-section menu-section_no-border">
      <Row
        middle="xs"
        start="xs"
        style={{ marginRight: 3 }}
      >
        <Col xs={9}>
          <h4 className="menu-section__title">ALBUMS</h4>
        </Col>
        <Col xs={3}>
          <IconButton iconStyle={{ color: accent }}>
            <FontIcon
              className="material-icons"
              style={{ fontSize: 24 }}
            >
              add_circle_outline
            </FontIcon>
          </IconButton>
        </Col>
      </Row>
      {props.albums &&
        props.albums.map(o => (
          <MenuItem
            onClick={props.handleShow}
            key={Math.random()}
            className="menu-section__item"
          >
            {o}
          </MenuItem>
        ))
      }
    </Col>
  )
}

Categories.propTypes = {
  handleShow: PropTypes.func,
  albums: PropTypes.arrayOf(PropTypes.string),
}

export default Categories
