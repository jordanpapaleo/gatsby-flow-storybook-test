import React from 'react'
import { storiesOf } from '@storybook/react'
import css from 'styled-jsx/css'

import Link from './Link'
import notes from './Link.md'

storiesOf('Link', module).add(
  '<Link />',
  () => (
    <>
      <Link>Default Link</Link>
      <style jsx>{styles}</style>
    </>
  ),
  { notes: { notes } },
)

const styles = css``
