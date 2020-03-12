// @flow
import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import classnames from 'classnames'
import css from 'styled-jsx/css'

import { toQaId } from 'common/formats'
import colors from 'styles/colors'

import type { DefaultComponentProps } from 'common/types/general.types'

type Props = DefaultComponentProps & {
  target?: string,
  to?: string,
  href?: string,
}

/*
  Other attributes:
    - use `to` for internal links
    - use `href` and `target`for external links
*/

const Link = (props: Props) => {
  const {
    'data-qa-id': dataQaId,
    children,
    className = '',
    href,
    style = {},
    to,
    ...otherProps
  } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'Link' })

  return to ? (
    <GatsbyLink
      className={classnames('Link-component', className)}
      data-qa-id={qaId}
      style={style}
      to={to}
      {...otherProps}
    >
      {children}
      <style jsx>{styles}</style>
    </GatsbyLink>
  ) : (
    <a
      className={classnames('Link-component', className)}
      data-qa-id={qaId}
      href={href}
      style={style}
      {...otherProps}
    >
      {children}
      <style jsx>{styles}</style>
    </a>
  )
}

const styles = css`
  :global(.Link-component) {
    background-color: transparent;
    color: ${colors.link};
    cursor: pointer;
    font-size: 90%;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.25s;
  }
  :global(.Link-component:hover) {
    color: ${colors.black};
    text-decoration: none;
  }
`

export default Link
