import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  tableValues = (desp, exchangeRates) => {
    if (exchangeRates === null) {
      const { ask } = desp.exchangeRates[desp.currency];
      const test = Number(ask);
      return test.toFixed(2);
    }
    const { value, currency } = desp;
    const { ask } = exchangeRates[currency];
    const result = value * ask;
    return result.toFixed(2);
  }

  valueInput = (value) => {
    const valueF = Number(value);
    return valueF.toFixed(2);
  }

  render() {
    const { despesas } = this.props;

    // if (despesas.length === 0) {
    //   return <> </>;
    // }
    return (
      <table>

        <thead>
          <tr>
            <th className="table"> Descrição </th>
            <th className="table"> Tag </th>
            <th className="table"> Método de pagamento </th>
            <th className="table"> Valor </th>
            <th className="table"> Moeda </th>
            <th className="table"> Câmbio utilizado </th>
            <th className="table"> Valor convertido </th>
            <th className="table"> Moeda de conversão </th>
            <th className="table"> Editar/Excluir </th>
          </tr>
        </thead>
        <tbody>
          {despesas.map((desp) => (
            <tr key={ desp.id }>
              <td>{ desp.description }</td>
              <td>{ desp.tag }</td>
              <td>{ desp.method }</td>
              <td>{ this.valueInput(desp.value) }</td>
              <td>{ desp.exchangeRates[desp.currency].name }</td>
              <td>{ this.tableValues(desp, null) }</td>
              <td>
                {' '}
                { this.tableValues(desp, desp.exchangeRates) }
              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="delete-btn"
                  type="button"
                >
                  Deletar
                </button>

              </td>
            </tr>
          ))}
        </tbody>

      </table>

    );
  }
}

const mapStateToProps = (state) => ({
  despesas: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  despesas: PropTypes.arrayOf(PropTypes.object).isRequired,
};
