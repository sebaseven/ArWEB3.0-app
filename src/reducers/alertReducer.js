import { types } from "../types/types";

const initialState = {
  open: false,
  mensaje: '',
  titulo: '',
  tipo:''
};
export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.alertaOpen:
      return {
        ...state,
        open: true,
        titulo: action.payload.titulo,
        mensaje: action.payload.mensaje,
        tipo: action.payload.tipo,
      };
    case types.alertaClose:
      return {
        ...state,
        open: false,
        mensaje: '',
        titulo:'',
        tipo:''
      };
    default:
      return state;
  }
};
