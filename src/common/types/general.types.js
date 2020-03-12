// @flow

import * as React from 'react'

export type ChildrenType = React.Node

export type DefaultComponentProps = {
  'data-qa-id'?: string,
  children?: ChildrenType,
  className?: string,
  style?: { [selector: string]: string | number },
}

export type StaticQueryProps = {
  site: {
    siteMetadata: {
      title: string,
      description: string,
    },
  },
}
