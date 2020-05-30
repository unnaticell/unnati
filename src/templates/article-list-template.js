import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/blog.module.css"
import BlogCard from "../components/Blog/BlogCard"
import Title from "../components/StyledTitle"

const articles = props => {
  const { currentPage, numPages } = props.pageContext
  const { data } = props
  const nextPage = `/article/${currentPage + 1}`
  const prevPage =
    currentPage - 1 === 1 ? `/article` : `/article/${currentPage - 1}`
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === numPages
  return (
    <Layout>
      <section className={styles.blog}>
        <Title title="latest" subtitle="articles" />
        <div className={styles.center}>
          {data.articles.edges.map(({ node }) => {
            return <BlogCard key={node.id} blog={node} />
          })}
        </div>
        <section className={styles.links}>
          {!isFirstPage && (
            <AniLink to={prevPage} className={styles.link}>
              Previous
            </AniLink>
          )}
          {Array.from({ length: 4 }, (_, i) => {
            return (
              <AniLink
                key={i}
                to={`/article/${i === 0 ? `1` : i + 1}`}
                className={
                  i + 1 === currentPage
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                {i + 1}
              </AniLink>
            )
          })}
          {currentPage >= 5 ? (
            <AniLink className={`${styles.link} ${styles.active}`}>
              {currentPage}
            </AniLink>
          ) : (
            ""
          )}
          {!isLastPage && (
            <AniLink to={nextPage} className={styles.link}>
              Next
            </AniLink>
          )}
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getArticles($skip: Int!, $limit: Int!) {
    articles: allContentfulArticles(
      skip: $skip
      limit: $limit
      sort: { fields: publishedDate, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          id: contentful_id
          publishedDate(formatString: "MMMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default articles
