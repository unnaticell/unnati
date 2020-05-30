import React from "react"
import Layout from "../components/Layout"
import Title from "../components/StyledTitle"
import Styles from "../css/about.module.css"
import Events from "../components/Events/Events"
import SEO from "../components/SEO"

const events = () => {
  return (
    <Layout>
      <SEO title="Events" description="Latest events from Unnati" />
      <section className={Styles.about}>
        <Title title="our" subtitle="events" />
        <Events />
      </section>
    </Layout>
  )
}

export default events
