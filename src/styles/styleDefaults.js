import Typography from 'typography'
import colors from 'styles/colors'
import css from 'styled-jsx/css'

const BASE_FONT = '16px'
const BASE_LINEHEIGHT = 1.5

const typography = new Typography({
  baseFontSize: BASE_FONT,
  baseLineHeight: BASE_LINEHEIGHT,
  bodyFontFamily: ['proxima-nova', 'Helvetica', 'Arial', 'sans-serif'],
  headerFontFamily: ['futura-pt', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
})

const styleDefaults = css`
  ${typography.toString()}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: ${BASE_FONT};
    line-height: ${BASE_LINEHEIGHT};
    color: ${colors.textDefault};
  }

  body {
    background: ${colors.background};
  }

  h1 {
    color: ${colors.textDark};
    font-size: 2em;
    font-style: normal;
    font-weight: 300;
    letter-spacing: 0.06em;
    line-height: 1.2em;
    margin-bottom: 1rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.5em;
    font-weight: 300;
    letter-spacing: 0.06em;
    line-height: 1.2em;
    margin-bottom: 1rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    color: ${colors.textDefault};
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.8em;
    margin: 0 0 1em;
    text-decoration: none;
    text-transform: none;
  }

  a {
    background-color: transparent;
    color: ${colors.link};
    cursor: pointer;
    font-size: 90%;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.25s;
  }

  a:focus,
  a:hover {
    color: ${colors.black};
    text-decoration: none;
  }

  ul,
  ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ol ul,
  ul ul,
  ol ol,
  ul ol {
    margin-bottom: 0.5rem;
  }

  hr {
    background: black;
    border: none;
    height: 1px;
    margin: 1rem 0;
  }
`

export default styleDefaults
