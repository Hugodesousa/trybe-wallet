// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

export const onLogin = (email) => ({
  type: LOGIN,
  payload: email,
});
