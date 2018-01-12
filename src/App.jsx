import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'

import Main from './components/layouts/Main'
import Container from './components/Container'
import './styles/App.css'

export default function App() {
  return (
    <Main>
      <Grid fluid>
        <Row>
          <Container />
        </Row>
      </Grid>
    </Main>
  )
}
