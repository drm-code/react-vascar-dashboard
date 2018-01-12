import React from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import 'typeface-roboto/index.css'

import Drawer from '../Drawer'

export default class Main extends React.Component {
  constructor() {
    super()
    this.setShowDrawer = this.setShowDrawer.bind(this)
    this.resize = this.resize.bind(this)
    this.state = {
      showDrawer: false,
      mobile: true,
      docked: false,
    }
  }

  componentDidMount() {
    this.resize()
    window.addEventListener('resize', this.resize)
  }

  setShowDrawer() {
    if (this.state.mobile) {
      this.setState({ showDrawer: !this.state.showDrawer })
    }
  }

  resize() {
    this.setState({
      showDrawer: window.innerWidth > 768,
      docked: window.innerWidth > 768,
      mobile: window.innerWidth <= 768,
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          {this.state.mobile &&
            <AppBar
              title="Vascar Dashboard"
              onLeftIconButtonClick={this.setShowDrawer}
            />
          }
          <Drawer
            open={this.state.showDrawer}
            handleShow={this.setShowDrawer}
            docked={this.state.docked}
            mobile={this.state.mobile}
          />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}
