import React from 'react'
import { Col, Row } from 'react-flexbox-grid'
import FontIcon from 'material-ui/FontIcon'
import Slider from 'material-ui/Slider'

import '../styles/Slider.css'

function SliderComponent(props) {
  const show = !props.mobile ? (
    <Col className="menu-section menu-section_scale">
      <Row
        middle="xs"
        around="xs"
        style={{ marginRight: 3, marginLeft: 3 }}
      >
        <Col
          xs={3}
          className="text-center"
        >
          <FontIcon
            className="material-icons"
            style={{ fontSize: 30 }}
          >
            view_comfy
          </FontIcon>
        </Col>
        <Col xs={6}>
          <Slider
            sliderStyle={{ marginTop: 4, marginBottom: 10 }}
            step={0.2}
            value={0.5}
            className="slider"
          />
        </Col>
        <Col
          xs={3}
          className="text-center"
        >
          <FontIcon
            className="material-icons"
            style={{ fontSize: 30 }}
          >
            view_module
          </FontIcon>
        </Col>
      </Row>
    </Col>
  ) : null
  return show
}

export default SliderComponent
