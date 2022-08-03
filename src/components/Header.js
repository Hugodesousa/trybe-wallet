import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      // valorTotal: 0,
    };
  }

  soma = () => {
    const { valores } = this.props;
    const initial = 0;
    if (valores.length === 0) {
      return initial.toFixed(2);
    }
    const total = valores.reduce((prev, curr) => {
      const { value, exchangeRates, currency } = curr;
      const valor = Number(value);
      const cambio = Number(exchangeRates[currency].ask);
      const valorConvertido = valor * cambio;
      return prev + valorConvertido;
    }, 0);
    return total.toFixed(2);
  }

  render() {
    const { email } = this.props;

    return (
      <div className="header">
        <p data-testid="email-field">
          {' '}
          {`email: ${email}`}
          {' '}
        </p>
        {email.length === 0 ? <Redirect to="/" /> : <> </>}
        <p data-testid="total-field">{ this.soma() }</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  valores: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  valores: PropTypes.arrayOf(PropTypes.object).isRequired,
};
