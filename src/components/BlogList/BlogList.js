// @flow
import React from 'react'
import { graphql } from 'gatsby'

import classnames from 'classnames'
import css from 'styled-jsx/css'

import { toQaId } from 'common/formats'
import Link from 'components/Link'
import type { DefaultComponentProps } from 'common/types/general.types'

type PropsT = DefaultComponentProps & {
  posts: Array<{
    excerpt?: string,
    fields: {
      slug: string,
    },
    frontmatter: {
      date: string,
      description?: string,
      title: string,
      tags: string,
    },
  }>,
  show?: number,
}

const BlogList = (props: PropsT) => {
  const { 'data-qa-id': dataQaId, className, posts, style = {} } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'BlogList' })

  return (
    <div className={classnames('BlogList-component', className)} style={style} data-qa-id={qaId}>
      {posts.map((post, i) => {
        const title = post.frontmatter.title || post.fields.slug
        return (
          <li key={post.fields.slug}>
            <article>
              <h3>
                <Link to={post.fields.slug}>{title}</Link>
              </h3>

              <small>{post.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
              />
              <small>{post.frontmatter.tags}</small>
            </article>
          </li>
        )
      })}

      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css``

export default BlogList

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            type
          }
        }
      }
    }
  }
`
