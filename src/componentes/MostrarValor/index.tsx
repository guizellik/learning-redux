import React from 'react';
import { useSelector } from 'react-redux'
import { EstadoInicial } from '../../App'


const MostrarValor = () => {
  const quantidadeCliques: number = useSelector((state: EstadoInicial) => state.quantidadeCliques)
  return (
    <span> {quantidadeCliques} </span>
  )
}

export default MostrarValor