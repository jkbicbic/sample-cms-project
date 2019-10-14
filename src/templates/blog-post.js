import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    const siteTitle = this.props.data.title
    const { previous, next } = this.props.pageContext
    const content = post.body.content.value

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.title}
        />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: content }} />
          <hr style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
                <Link rel="prev">
                </Link>
            </li>
            <li>
              {next && (
                <Link rel="next">
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query MyQuery {
  contentfulPost {
    id
    title
    slug
    media {
      id
    }
    body {
      id
      content {
        content {
          value
        }
      }
    }
  }}
`
