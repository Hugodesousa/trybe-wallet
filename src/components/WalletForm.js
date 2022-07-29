import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetCoin } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { getcoin } = this.props;
    getcoin();
  }

  render() {
    const { coins } = this.props;
    console.log(coins);
    return (
      <div>
        <p>WalletForm</p>
        <form>
          <label htmlFor="value">
            <input data-testid="value-input" type="number" id="value" />
          </label>
          <label htmlFor="description">
            <input data-testid="description-input" type="number" id="description" />
          </label>
          <select
            name="selectCoin"
            data-testid="currency-input"
          >
            {coins.map((coin) => (
              <option value={ coin } key={ coin }>
                {coin}
              </option>
            ))}
          </select>
          <select
            name="selectPain"
            data-testid="method-input"
          >
            <option value="Dinheiro"> Dinheiro </option>
            <option value="Cartão de crédito"> Cartão de crédito </option>
            <option value="Cartão de débito"> Cartão de débito </option>
          </select>
          <select
            name="type"
            data-testid="tag-input"
          >
            <option value="Alimentação"> Alimentação </option>
            <option value="Lazer"> Lazer </option>
            <option value="Trabalho"> Trabalho </option>
            <option value="Transporte"> Transporte </option>
            <option value="Saúde"> Saúde </option>
          </select>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
});
const mapDispatchToProps = (dispatch) => ({
  getcoin: () => {
    dispatch(fetCoin());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

WalletForm.propTypes = {
  coins: PropTypes.arrayOf.isRequired,
  getcoin: PropTypes.func.isRequired,
};
