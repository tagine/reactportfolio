import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item
        as={Link} to="/"
        name="about"
        active={activeItem === 'about'}
        onClick={this.handleItemClick}>
          <img src='https://react.semantic-ui.com/logo.png' alt="logo" />
        </Menu.Item>

        <Menu.Item
          as={Link} to="/portfolio"
          name="portfolio"
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}
        >
          Portfolio
        </Menu.Item>

        <Menu.Item
          as={Link} to="/contact"
          name="contact"
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        >
          Contact
        </Menu.Item>
      </Menu>
    )
  }
};