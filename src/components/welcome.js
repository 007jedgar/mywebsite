import React from 'react'
import Layout from './layout'
import "./main.css"
import Header from './header'
import { Link } from "react-router-dom";

const Welcome = (props) => 
    (
      <div className="content-container">
          <p >Hello, I'm Jonathan,</p>

          <h3>I build beautiful in-app experiences.</h3>
          <h4>I'm a web and mobile app developer with a wide range of skills for problem solving and product development.</h4>

          <ul className="cta-main">
            <li> <Link to="portfolio">SEE MY WORK </Link> </li>
            <li><a href="mailto:jedgardev@gmail.com">GET IN TOUCH</a></li>
          </ul>
      </div>
    )


export default Welcome