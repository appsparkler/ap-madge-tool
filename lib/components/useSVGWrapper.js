'use babel'

import React from 'react'

export default ({svg, handlePlusClick, handleMinusClick}) => {
  const [state, setState] = React.useState({
    style: {
      scale: 1
    }
  })
  const svgWrapperRef = React.useRef();

  React.useEffect(() => {
    svgWrapperRef.current.innerHTML = svg;
  },[svg])

  React.useEffect(() =>  {
    svgWrapperRef.current.style.scale = state.style.scale
  },[state.style.scale])

  return {
    svgWrapperRef,
    ...state,
    handlePlusClick: React.useCallback(() => {
      setState(s => ({
        ...s,
        style: {
          ...s.style,
          scale: s.style.scale - 0.1
        }
      }))
    },[]),
    handleMinusClick: React.useCallback(() => {
      setState(s => ({
        ...s,
        style: {
          ...s.style,
          scale: s.style.scale + 0.1
        }
      }))
    },[])
  }
}
