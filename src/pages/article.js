import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/Blog/BlogList"
import SEO from "../components/SEO"

const blog = () => {
  return (
    <Layout>
      <SEO title="Articles" description="Latest articles from Unnati" />
      <BlogList />
    </Layout>
  )
}

export default blog
