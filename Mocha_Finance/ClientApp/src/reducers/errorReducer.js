import { GET_ERROS } from "../actions/types";

const initialState = {
  status: null,
  msg: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERROS:
      return {
        ...state,
        status: action.payload.status,
        msg: action.payload.msg
      };
    default:
      return state;
  }
}
