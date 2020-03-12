// @flow
import React from 'react'
import css from 'styled-jsx/css'
import classnames from 'classnames'

import { toQaId } from 'common/formats'
import AppLayout from 'layouts/AppLayout'

import type { DefaultComponentProps } from 'common/types/general.types'

type PropsT = DefaultComponentProps & {}

const Home = (props: PropsT) => {
  const {
    'data-qa-id': dataQaId,
    className,
    style = {},
  } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'Home' })

  return (
    <AppLayout
      className={classnames('Home-component', className)}
      style={style}
      data-qa-id={qaId}
      heading="Home"
    >
      <style jsx>{styles}</style>
    </AppLayout>
  )
}

const styles = css``

export default Home
