import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetCoin, fetCotation } from '../redux/actions';

const alimentação = 'Alimentação';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentação,
      description: '',
    };
  }

  componentDidMount() {
    const { getcoin } = this.props;
    getcoin();
  }

  saveForm = () => {
    const { saveExpenses } = this.props;
    const { id, value, description, method, currency, tag } = this.state;
    this.setState((prev) => ({
      id: prev.id + 1,
    }));
    const demiss = { id, value, description, method, currency, tag };
    saveExpenses(demiss);
    this.setState({
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentação,
      description: '',
    });
  }

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({
      [target.name]: value,
    });
  }

  render() {
    const { coins } = this.props;
    const { value, description, method, currency, tag } = this.state;
    // console.log(coins); na primeira renderização coin e um array vazio
    return (
      <div>
        <p>WalletForm</p>
        <form>
          <label htmlFor="value">
            <input
              className="inputLogin"
              placeholder="Valor"
              data-testid="value-input"
              type="number"
              id="value"
              onChange={ this.handleChange }
              value={ value }
              name="value"
            />
          </label>
          <label htmlFor="description">
            <input
              className="inputLogin"
              placeholder="Descrição"
              data-testid="description-input"
              type="text"
              id="description"
              onChange={ this.handleChange }
              value={ description }
              name="description"
            />
          </label>
          <select
            className="inputLogin"
            name="currency"
            data-testid="currency-input"
            onChange={ this.handleChange }
            value={ currency }
          >
            {coins.map((coin) => (
              <option value={ coin } key={ coin }>
                {coin}
              </option>
            ))}
          </select>
          <select
            className="inputLogin"
            name="method"
            data-testid="method-input"
            onChange={ this.handleChange }
            value={ method }
          >
            <option value="Dinheiro"> Dinheiro </option>
            <option value="Cartão de crédito"> Cartão de crédito </option>
            <option value="Cartão de débito"> Cartão de débito </option>
          </select>
          <select
            className="inputLogin"
            name="tag"
            data-testid="tag-input"
            onChange={ this.handleChange }
            value={ tag }
          >
            <option value="Alimentação"> Alimentação </option>
            <option value="Lazer"> Lazer </option>
            <option value="Trabalho"> Trabalho </option>
            <option value="Transporte"> Transporte </option>
            <option value="Saúde"> Saúde </option>
          </select>
          <button
            className="buttonDespesa"
            type="button"
            onClick={ this.saveForm }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
  valores: state.wallet.expenses,
  cota: state.wallet.exchangeRates,
});
const mapDispatchToProps = (dispatch) => ({
  getcoin: () => {
    dispatch(fetCoin());
  },
  saveExpenses: (demiss) => {
    dispatch(fetCotation(demiss));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

WalletForm.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
  getcoin: PropTypes.func.isRequired,
  saveExpenses: PropTypes.func.isRequired,
};
