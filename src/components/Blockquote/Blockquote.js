// @flow
import React from 'react'
import classnames from 'classnames'
import css from 'styled-jsx/css'

import { toQaId } from 'common/formats'
import colors from 'styles/colors'

import type { DefaultComponentProps } from 'common/types/general.types'

type PropsT = DefaultComponentProps & {
  caption?: string,
}

const Blockquote = (props: PropsT) => {
  const { 'data-qa-id': dataQaId, className, style = {}, children, caption } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'Blockquote' })

  return (
    <figure className={classnames('Blockquote-component', className)} style={style} data-qa-id={qaId}>
      <blockquote>"{children}"</blockquote>
      {caption && <figcaption>- {caption}</figcaption>}
      <style jsx>{styles}</style>
    </figure>
  )
}

const styles = css`
  figure {
    margin: 1em 0;
    text-align: center;
  }
  blockquote {
    border: none;
    color: ${colors.brandPrimary};
    font-size: 3.125vh;
    font-weight: bold;
    letter-spacing: 0.05em;
    line-height: 1.2em;
    margin: auto auto 0.5em;
    padding-left: 0;
    padding-right: 0;
    text-transform: uppercase;
  }
  figcaption {
    color: ${colors.textDefault};
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.2em;
    line-height: 1.4em;
    text-transform: uppercase;
  }
`

export default Blockquote
