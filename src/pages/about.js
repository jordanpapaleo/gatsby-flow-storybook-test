// @flow
import React from 'react'
import classnames from 'classnames'
import css from 'styled-jsx/css'

import { toQaId } from 'common/formats'
import AppLayout from 'layouts/AppLayout'

import type { DefaultComponentProps } from 'common/types/general.types'

type PropsT = DefaultComponentProps & {}

const About = (props: PropsT) => {
  const {
    'data-qa-id': dataQaId,
    className,
    style = {},
  } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'About' })

  return (
    <AppLayout
      className={classnames('About-component', className)}
      data-qa-id={qaId}
      heading="About"
      style={style}
    >
      <style jsx>{styles}</style>
    </AppLayout>
  )
}

const styles = css``

export default About
