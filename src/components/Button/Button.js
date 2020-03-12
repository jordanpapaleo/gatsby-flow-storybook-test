// @flow
import React from 'react'
import classnames from 'classnames'
import css from 'styled-jsx/css'

import { toQaId } from 'common/formats'
import colors from 'styles/colors'

import type { DefaultComponentProps } from 'common/types/general.types'

type PropsT = DefaultComponentProps & {
  type: string,
}

const Button = (props: PropsT) => {
  const { 'data-qa-id': dataQaId, children, className = '', style = {}, type = 'button', ...otherProps } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'Button' })

  return (
    <button className={classnames('Button-component', className)} data-qa-id={qaId} style={style} type={type} {...otherProps}>
      {children}
      <style jsx>{styles}</style>
    </button>
  )
}

const styles = css`
  .Button-component {
    background-color: ${colors.background};
    border: 2px solid ${colors.border};
    color: ${colors.textDefault};
    cursor: pointer;
    font-weight: 500;
    padding: 12px 22px;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.25s;
  }
  .Button-component:hover {
    background-color: ${colors.backgroundDark};
    color: ${colors.textLight};
  }
`

export default Button
