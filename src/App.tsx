import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import AumentarValor from './componentes/AumentarValor'
import DiminuirValor from './componentes/DiminuirValor'
import MostrarValor from './componentes/MostrarValor'

export interface EstadoInicial {
  quantidadeCliques: number
}

interface Action {
  type: string
}

const estadoInicial: EstadoInicial = {
  quantidadeCliques: 0
}

const meuReducer = (state = estadoInicial, action: Action) => {
  switch (action.type) {
    case "AUMENTA_CLIQUE":
      return {
        ...state,
        quantidadeCliques: state.quantidadeCliques + 1
      }
      case "DIMINUI_CLIQUE":
      return {
        ...state,
        quantidadeCliques: state.quantidadeCliques - 1
      }
      default:
        return state
  }
}

const store = createStore(meuReducer);


function App() {
  return (
    <Provider store={store}>
      <AumentarValor/>
      <MostrarValor/>
      <DiminuirValor/>
    </Provider>

  );
}

export default App;
