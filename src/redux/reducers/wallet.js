// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { GET_COINS, SAVE_DISMISS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_COINS:
    return {
      ...state,
      currencies: action.payload,
    };
  case SAVE_DISMISS:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
