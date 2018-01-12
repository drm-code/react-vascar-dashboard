import React from 'react'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'

import Avatar from './Avatar'
import Search from './Search'
import Categories from './Categories'
import Albums from './Albums'
import Slider from './Slider'

function DrawerComponent(props) {
  const categories = ['Photos', 'Videos', 'Projects']
  const albums = ['Subcarpathis 2016', 'Summer 2015', 'Aspen 2015', 'Croatia 2015']
  return (
    <Drawer
      docked={props.docked}
      open={props.open}
      width={223}
      onRequestChange={props.handleShow}
      containerClassName="bg_dark-primary"
    >
      <Avatar />
      <Search />
      <Categories
        handleShow={props.handleShow}
        categories={categories}
      />
      <Albums
        handleShow={props.handleShow}
        albums={albums}
      />
      <Slider mobile={props.mobile} />
    </Drawer>
  )
}

DrawerComponent.propTypes = {
  open: PropTypes.bool,
  docked: PropTypes.bool,
  handleShow: PropTypes.func,
  mobile: PropTypes.bool,
}

export default DrawerComponent
