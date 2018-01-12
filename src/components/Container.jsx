import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import FontIcon from 'material-ui/FontIcon'

import { text } from '../styles/Colors'

export default function Container() {
  const data = Array(2).fill({
    title: 'Subcarpathia 2016',
    photos: 8,
    data: Array(8).fill({
      date: '25.02.2016',
      time: '5:40 PM',
      f: 'f/8',
      scale: '1/250',
      iso: 'ISO 400',
    }),
  })
  return (
    <Col xs={12}>
      <Col className="social-media">
        <FontIcon
          color={text}
          className="material-icons social-media__icon"
        >
          play_arrow
        </FontIcon>
        <FontIcon
          color={text}
          className="material-icons social-media__icon"
        >
          share
        </FontIcon>
      </Col>
      {data.map(item => (
        <Row key={Math.random()}>
          <Col xs={12}>
            <h2 className="category__title">{item.title}</h2>
            <h5 className="category__title category__title_count">({item.photos} Photos)</h5>
          </Col>
          {item.data.map(card => (
            <Col xs={12} sm={3} key={Math.random()} style={{ marginBottom: 20 }}>
              <Col className="card">
                <Row between="xs">
                  <Col xs={12}>
                    <Col
                      className="card__body"
                      style={{ backgroundImage: `url(http://lorempixel.com/${Math.floor(Math.random() * ((500 - 200) + 200))}/${Math.floor(Math.random() * ((400 - 350) + 350))})` }}
                    />
                  </Col>
                  <Col xs={12}>
                    <Col className="card__footer">
                      <span style={{ marginRight: 10 }}>{card.time}</span>
                      <span style={{ marginRight: 10 }}>{card.f}</span>
                      <span style={{ marginRight: 10 }}>{card.scale}</span>
                      <span style={{ marginRight: 10 }}>{card.iso}</span>
                    </Col>
                  </Col>
                </Row>
              </Col>
              <Col>
                <p style={{ fontSize: 12 }}>{card.date}</p>
              </Col>
            </Col>
          ))}
        </Row>
      ))}
    </Col>
  )
}
