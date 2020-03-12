// @flow
import React from 'react'
import { graphql } from 'gatsby'
import classnames from 'classnames'
import css from 'styled-jsx/css'
import get from 'lodash/get'

import { toQaId } from 'common/formats'
import BlogList from 'components/BlogList'
import AppLayout from 'layouts/AppLayout'

import type { DefaultComponentProps } from 'common/types/general.types'

type PropsT = DefaultComponentProps & {
  data: any,
}

const Blog = (props: PropsT) => {
  const { 'data-qa-id': dataQaId, className, data, style = {} } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'Blog' })
  const posts = get(data, 'allMarkdownRemark.edges', []).map((post) => post.node)

  return (
    <AppLayout className={classnames('Blog-component', className)} style={style} data-qa-id={qaId}>
      <h1>Blogs</h1>
      <BlogList posts={posts} show={5} />
      <style jsx>{styles}</style>
    </AppLayout>
  )
}

const styles = css``

export default Blog

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
