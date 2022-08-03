// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const GET_COINS = 'GET_COINS';
export const SAVE_DISMISS = 'SAVE_DISMISS';
export const DELETE_DISMISS = 'DELETE_DISMISS';

export const onLogin = (email) => ({
  type: LOGIN,
  payload: email,
});

export const getCoins = (coinsList) => ({
  type: GET_COINS,
  payload: coinsList,
});

export const saveDismiss = (coin) => ({
  type: SAVE_DISMISS,
  payload: coin,
});
export const deleteDismiss = (id) => ({
  type: DELETE_DISMISS,
  payload: id,
});

export function fetCoin() {
  return async (dispatch) => {
    const resolve = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await resolve.json();
    const dataCoin = Object.keys(data);
    const endDataCoin = dataCoin.filter((coin) => (
      coin !== 'USDT'
    ));
    dispatch(getCoins(endDataCoin));
  };
}

export function fetCotation(demiss) {
  return async (dispatch) => {
    const resolve = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await resolve.json();
    demiss.exchangeRates = data;
    dispatch(saveDismiss(demiss));
  };
}
