import React from "react"
import Layout from "../components/Layout"
import Title from "../components/StyledTitle"
import Styles2 from "../css/single-blog.module.css"
import Content from "../components/Times/content"
import SEO from "../components/SEO"

const times = () => {
  return (
    <Layout>
      <SEO
        title="Unnati Times"
        description="Details about Unnati Times Branch"
      />

      <section className={Styles2.blog}>
        <Title title="UNNATI" subtitle="TIMES" />
        <Content />
      </section>
    </Layout>
  )
}

export default times
