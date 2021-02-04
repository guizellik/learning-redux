import React from 'react';
import { useDispatch } from 'react-redux'


const AumentarValor = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch({type: "AUMENTA_CLIQUE"})}> + </button>
  )
}

export default AumentarValor