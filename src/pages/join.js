import React from "react"
import Layout from "../components/Layout"
import Title from "../components/StyledTitle"
import Styles2 from "../css/single-blog.module.css"
import Content from "../components/Join/content"
import SEO from "../components/SEO"

const join = () => {
  return (
    <Layout>
      <SEO title="Join" description="Join Unnati" />
      <section className={Styles2.blog}>
        <Title title="Join" subtitle="Us" />
        <Content />
      </section>
    </Layout>
  )
}

export default join
