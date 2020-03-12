// @flow
import React from 'react'
import classnames from 'classnames'
import css from 'styled-jsx/css'

import { toQaId } from 'common/formats'
import LayoutRoot from 'layouts/LayoutRoot'
import Link from 'components/Link'

import type { DefaultComponentProps } from 'common/types/general.types'

type PropsT = DefaultComponentProps & {
  heading?: string,
}

const AppLayout = (props: PropsT) => {
  const {
    'data-qa-id': dataQaId,
    children,
    className,
    heading = '',
    style = {},
  } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'AppLayout' })
  const homeQaId = toQaId({ componentId: 'AppLayout', useId: 'Home' })
  const aboutQaId = toQaId({ componentId: 'AppLayout', useId: 'About' })
  const blogQaId = toQaId({ componentId: 'AppLayout', useId: 'Blog' })

  return (
    <LayoutRoot className={classnames('AppLayout-component', className)} style={style} data-qa-id={qaId}>
      <nav>
        <Link to="/" className={homeQaId} data-qa-id={homeQaId} style={{ marginRight: 10 }}>
          Home
        </Link>
        <Link to="/about" className={aboutQaId} data-qa-id={aboutQaId} style={{ marginRight: 10 }}>
          About
        </Link>
        <Link to="/blog" className={blogQaId} data-qa-id={blogQaId} style={{ marginRight: 10 }}>
          Blog
        </Link>
      </nav>

      {heading && (
        <header>
          <h1>{heading}</h1>
        </header>
      )}

      {children}
      <style jsx>{styles}</style>
    </LayoutRoot>
  )
}

const styles = css``

export default AppLayout
