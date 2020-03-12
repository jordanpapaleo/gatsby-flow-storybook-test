// @flow
import React from 'react'
import classnames from 'classnames'
import css from 'styled-jsx/css'

import { toQaId } from 'common/formats'
import AppLayout from 'layouts/AppLayout'
import Link from 'components/Link'

import type { DefaultComponentProps } from 'common/types/general.types'

type PropsT = DefaultComponentProps & {}

const NotFoundPage = (props: PropsT) => {
  const {
    'data-qa-id': dataQaId,
    className,
    style = {},
  } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'NotFoundPage' })

  return (
    <AppLayout
      className={classnames('NotFoundPage-component', className)}
      data-qa-id={qaId}
      header="404"
      style={style}
    >
      <p>You've hit the void. <Link to="/">Go home.</Link></p>
      <style jsx>{styles}</style>
    </AppLayout>
  )
}

const styles = css``

export default NotFoundPage
