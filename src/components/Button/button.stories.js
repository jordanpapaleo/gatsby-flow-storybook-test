import React from 'react'
import { storiesOf } from '@storybook/react'
import css from 'styled-jsx/css'

import Button from './Button'
import notes from './Button.md'

storiesOf('Button', module).add(
  '<Button />',
  () => (
    <>
      <Button>Default Button</Button>
      <style jsx>{styles}</style>
    </>
  ),
  { notes: { notes } },
)

const styles = css``
