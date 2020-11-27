import { types } from "../../types/types";

export const startAlerta =(tipo,mensaje,titulo)=>{
    return (dispatch) => {
        dispatch(alertaAbrir(tipo,mensaje,titulo));
      };
}
export const finishAlerta =(tipo,mensaje,titulo)=>{
    return (dispatch) => {
        dispatch(alertaCerrar());
      };
}
const alertaAbrir = (mensaje,tipo,titulo) => ({
    type: types.alertaOpen,
    payload: {
        mensaje: mensaje,
        tipo:tipo,
        titulo:titulo
    },
  });
  const alertaCerrar = () => ({
    type: types.alertaClose,
  });