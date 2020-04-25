'use strict'

import './config'
import DOM from 'domql'
import styles from './styles'

import colors from './colors'
import buttons from './buttons'
import shapes from './shapes'

// Symbols
import { Shape } from '../src'

DOM.create({
  class: styles,
  h4: {
    a: {
      text: 'symbols yo!',
      attr: { href: '/' }
    }
  },
  colors: {
    h1: 'Colors',
    container: colors
  },
  shapes: {
    h1: 'Shapes',
    container: shapes
  },
  buttons: {
    h1: 'Buttons',
    container: buttons
  }
})
