import { GET_ERROS } from "./types";

export const returnErrors = (msg, status) => {
  return {
    type: GET_ERROS,
    payload: { msg, status }
  };
};
