import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'

import Main from './components/layouts/Main'
import './styles/App.css'

export default function App() {
  return (
    <Main>
      <Grid fluid>
        <Row>
          <h1>Hello Dashboard</h1>
        </Row>
      </Grid>
    </Main>
  )
}
