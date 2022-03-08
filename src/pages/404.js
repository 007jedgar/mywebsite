import React from "react"

import Layout from "../components/layout"
import "../components/main.css"

const NotFoundPage = () => (
  <Layout>
    <div className="page-layout">
      <div className="content-container">
        <h1>PAGE NOT FOUND</h1>
        <h4>You just hit a route that doesn&#39;t exist... the sadness.</h4>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
