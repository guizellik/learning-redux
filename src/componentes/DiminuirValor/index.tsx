import React from 'react';
import { useDispatch } from 'react-redux'


const DiminuirValor = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch({type: "DIMINUI_CLIQUE"})}> - </button>
  )
}

export default DiminuirValor