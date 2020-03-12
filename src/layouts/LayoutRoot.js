// @flow
import 'modern-normalize'
import * as React from 'react'
import classnames from 'classnames'
import css from 'styled-jsx/css'

import { toQaId } from 'common/formats'
import styleDefaults from 'styles/styleDefaults'

import type { DefaultComponentProps } from 'common/types/general.types'

const { useEffect, useReducer } = React

function getLayout(width) {
  if (width < 812) return 'mobile'
  else if (width < 1112) return 'tablet'
  else if (width < 1600) return 'laptop'
  else return 'ultrawide'
}

function responsiveReducer(state, action: { payload: any, type: string }) {
  if (action.type === 'resize') {
    return {
      ...state,
      ...action.payload,
      layout: getLayout(action.payload.width),
    }
  }

  return state
}

const initState = {
  width: window.innerWidth,
  height: window.innerHeight,
  layout: getLayout(window.innerWidth),
}

export const DispatchContext: React.Context<?{}> = React.createContext()
export const ResponsiveContext: React.Context<?{}> = React.createContext(initState)

const LayoutRoot = (props: DefaultComponentProps) => {
  const { 'data-qa-id': dataQaId, children, className = '', style = {} } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'LayoutRoot' })

  const [responsiveState, dispatch] = useReducer(responsiveReducer, initState)

  useEffect(() => {
    const handleResize = () => {
      dispatch({
        type: 'resize',
        payload: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  console.log('LayoutRoot state', responsiveState)

  return (
    <DispatchContext.Provider value={dispatch}>
      <ResponsiveContext.Provider value={responsiveState}>
        <main
          className={classnames('LayoutRoot-component', className)}
          data-qa-id={qaId}
          style={style}
        >
          {children}
          <style jsx global>{styleDefaults}</style>
          <style jsx>{styles}</style>
        </main>
      </ResponsiveContext.Provider>
    </DispatchContext.Provider>
  )
}

export default LayoutRoot

const styles = css`
  .LayoutRoot-component {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 40px 60px;
  }
`
