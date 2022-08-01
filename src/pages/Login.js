import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { onLogin } from '../redux/actions';
import logo from '../img/logo.png';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailInput: 'hugodesousa.16@gmail.com',
      passWordlInput: '1234516',
      buttonLogin: true,
      login: false,
    };
  }

  checkEmail = (emailInput) => {
    const validEmail = new RegExp(
      '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
    );
    return validEmail.test(emailInput);
  }

  checkLogin = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    }, () => {
      const minPass = 6;
      const { emailInput, passWordlInput } = this.state;

      if (this.checkEmail(emailInput) && passWordlInput.length >= minPass) {
        return this.setState({
          buttonLogin: false,
        });
      }
      return this.setState({
        buttonLogin: true,
      });
    });
  }

  saveLogin = () => {
    const { addEmail } = this.props;
    const { emailInput } = this.state;
    addEmail(emailInput);
    this.setState({
      login: true,
    });
  }

  render() {
    const { buttonLogin, emailInput, passWordlInput, login } = this.state;
    return (
      <div className="loginConteiner">
        <div className="logoName">
          <img src={ logo } alt="logo" className="logo" />
          <h2> Trybe Wallet </h2>
        </div>
        <div className="Login">
          <h1> Login </h1>
          <form className="formLogin">
            <label htmlFor="emailInput">
              <input
                className="inputLogin"
                id="emailInput"
                name="emailInput"
                placeholder="exemplo@email.com"
                type="email"
                data-testid="email-input"
                onChange={ this.checkLogin }
                value={ emailInput }
              />
            </label>
            <label htmlFor="passWordlInput">
              <input
                className="inputLogin"
                placeholder="Senha de 6 digitos"
                id="passWordlInput"
                name="passWordlInput"
                type="password"
                data-testid="password-input"
                onChange={ this.checkLogin }
                value={ passWordlInput }
              />
            </label>
            <button
              className="buttonLogin"
              type="button"
              disabled={ buttonLogin }
              onClick={ () => this.saveLogin() }
            >
              Entrar
            </button>
          </form>
        </div>

        {login ? <Redirect to="/carteira" /> : <> </>}
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  addEmail: (payload) => {
    dispatch(onLogin(payload));
  },
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  addEmail: PropTypes.func.isRequired,
};
