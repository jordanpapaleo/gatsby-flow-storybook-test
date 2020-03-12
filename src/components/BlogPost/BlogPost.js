import React from 'react'
import { Link, graphql } from 'gatsby'
import css from 'styled-jsx/css'
import classnames from 'classnames'

import { toQaId } from 'common/formats'
import LayoutRoot from 'layouts/LayoutRoot'
import Seo from 'components/Seo'

import { DefaultComponentProps } from 'common/types/general.types'

type PropsT = DefaultComponentProps & {
  data: {
    markdownRemark: {
      post: {
        frontmatter: {
          description: string,
          sitle: string,
          excerpt: string,
        },
        html: string,
      },
    },
    pageContext: {
      previous?: any,
      next?: any,
    },
    site: {
      siteMetaData: {
        title: string,
      },
    },
  },
}

const BlogPost = (props: PropsT) => {
  const { 'data-qa-id': dataQaId, pageContext, className, style = {}, data } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'BlogPost' })
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <LayoutRoot className={classnames('BlogPost-component', className)} style={style} data-qa-id={qaId}>
      <Seo title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />

      <header>
        <div>{post.frontmatter.date}</div>
        <h1>{post.frontmatter.title}</h1>
      </header>

      <article dangerouslySetInnerHTML={{ __html: post.html }} />

      <nav>
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            {previous.frontmatter.title}
          </Link>
        )}

        {next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} Ã¢Â†Â’
          </Link>
        )}
      </nav>
      <style jsx>{styles}</style>
    </LayoutRoot>
  )
}

const styles = css``

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author {
          name
          url
          email
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
