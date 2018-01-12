import React from 'react'
import { Col } from 'react-flexbox-grid'
import MenuItem from 'material-ui/MenuItem'
import PropTypes from 'prop-types'

function Categories(props) {
  return (
    <Col className="menu-section">
      <h4 className="menu-section__title">CATEGORIES</h4>
      {props.categories &&
        props.categories.map(o => (
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
  categories: PropTypes.arrayOf(PropTypes.string),
}

export default Categories
