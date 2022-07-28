import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { onLogin } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailInput: '',
      passWordlInput: '',
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
      <div>
        <h1> Login </h1>
        <form>
          <label htmlFor="emailInput">
            <input
              id="emailInput"
              name="emailInput"
              placeholder="Email"
              type="email"
              data-testid="email-input"
              onChange={ this.checkLogin }
              value={ emailInput }
            />
          </label>
          <label htmlFor="passWordlInput">
            <input
              placeholder="Senha"
              id="passWordlInput"
              name="passWordlInput"
              type="password"
              data-testid="password-input"
              onChange={ this.checkLogin }
              value={ passWordlInput }
            />
          </label>
          <button
            type="button"
            disabled={ buttonLogin }
            onClick={ () => this.saveLogin() }
          >
            Entrar
          </button>
        </form>
        {login ? <Redirect to="/carteira" /> : <> </>}
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  addEmail: (payload) => {
    dispatch(onLogin(payload));
  },
});

Login.propTypes = {
  addEmail: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
