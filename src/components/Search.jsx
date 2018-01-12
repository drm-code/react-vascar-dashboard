import React from 'react'
import { Col, Row } from 'react-flexbox-grid'
import FontIcon from 'material-ui/FontIcon'
import TextField from 'material-ui/TextField'

import '../styles/Search.css'
import { text, darkText } from '../styles/Colors'

function Search() {
  return (
    <Col xs={12}>
      <Row
        className="search"
        middle="xs"
      >
        <Col xs={2}>
          <FontIcon
            className="material-icons"
            style={{ fontSize: 24 }}
            color={darkText}
          >
            search
          </FontIcon>
        </Col>
        <Col xs={10}>
          <TextField
            fullWidth
            underlineShow={false}
            hintText="Search files"
            hintStyle={{ color: darkText }}
            inputStyle={{ color: text }}
            className="search__input"
          />
        </Col>
      </Row>
    </Col>
  )
}

export default Search
