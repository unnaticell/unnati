import React from "react"
import Layout from "../components/Layout"
import Title from "../components/StyledTitle"
import Styles from "../css/about.module.css"
import Content from "../components/Upcoming/content"
import SEO from "../components/SEO"

const upcoming = () => {
  return (
    <Layout>
      <section className={Styles.about}>
        <SEO
          title="Upcoming"
          description="Details about upcoming Unnati events"
        />
        <Title title="Upcoming" subtitle="events" />
        <Content />
      </section>
    </Layout>
  )
}

export default upcoming
