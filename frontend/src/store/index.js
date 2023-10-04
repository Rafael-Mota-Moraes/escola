import { legacy_createStore as createStore } from "redux";

const initialState = {
  botaoClicado: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOTAO_CLICADO":
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;

    case "BOTAO_CLICADO_2":
      break;

    default:
      return state;
  }
  return state;
};

const store = createStore(reducer);

export default store;
