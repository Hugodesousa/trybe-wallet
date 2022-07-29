// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const GET_COINS = 'GET_COINS';

export const onLogin = (email) => ({
  type: LOGIN,
  payload: email,
});

export const getCoins = (coins) => ({
  type: GET_COINS,
  payload: coins,
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
