import React, {Component} from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import { Outlet, Link } from "react-router-dom"


class Layout extends Component {
  constructor() {
    super()

    this.state = { showMenu: false }
  }

  renderMenu() {
    if (this.state.showMenu) {
      return (
        <div className="menu">
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
          <ul>
            <li><Link to="/portfolio">Portfolio</Link></li>
          </ul>
          <ul>
            <li><a target="_blank" href="mailto:jedgardev@gmail.com">Contact</a></li>
          </ul>
        </div>
      )
    }
  }

  render() {
    // const { children } = this.props
    return (
      <>
        <Header handleClick={() => this.setState({ showMenu: !this.state.showMenu })} />
        <div>
          <main>
            <Outlet />
            {this.renderMenu()}
          </main>
          
          <footer>
          <div className="footer">
              <h3>Want to hear more?</h3>

              <p>For business inquiries or casual chatter send an note via email.</p>

              <h4><a target="_blank" href="mailto:jedgardev@gmail.com">jedgardev@gmail.com</a></h4>
          </div>
          </footer>
        </div>
      </>
   )
 }
}

Layout.propTypes = {
  
}

export default Layout
