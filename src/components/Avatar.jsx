import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar'

import '../styles/Avatar.css'
import { white, accent } from '../styles/Colors'

function AvatarComponent() {
  return (
    <Col xs={12}>
      <Row
        center="xs"
        middle="xs"
        className="avatar"
      >
        <Col>
          <Avatar
            src="http://fillmurray.com/100/100"
            size={83}
          />
        </Col>
        <Col>
          <p className="avatar__user-name"><strong>Amelia Rice</strong></p>
          <p className="avatar__user-name_files">2390 files</p>
        </Col>
        <Col>
          <RaisedButton
            label="upload"
            backgroundColor={accent}
            labelColor={white}
            buttonStyle={{ borderRadius: 25, width: 163 }}
            style={{ borderRadius: 25 }}
            overlayStyle={{ borderRadius: 25 }}
          />
        </Col>
      </Row>
    </Col>
  )
}

export default AvatarComponent
