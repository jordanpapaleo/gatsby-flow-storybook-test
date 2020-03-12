import React from 'react'
import { storiesOf } from '@storybook/react'
import css from 'styled-jsx/css'

import Blockquote from './Blockquote'
import notes from './Blockquote.md'

storiesOf('Blockquote', module).add(
  '<Blockquote />',
  () => (
    <>
      <Blockquote>Be the change that you wish to see in the world.</Blockquote>

      <Blockquote caption="Albert Einstein">Two things are infinite: the universe and human stupidity; and I'm not sure about the universe</Blockquote>

      <style jsx>{styles}</style>
    </>
  ),
  { notes: { notes } },
)

const styles = css``
