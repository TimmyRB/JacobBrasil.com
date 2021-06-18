import React from "react"
import DefaultLayout from "../components/layouts/DefaultLayout"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <DefaultLayout>
    <SEO title="404: Not found" themeColor="#13162a" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </DefaultLayout>
)

export default NotFoundPage
