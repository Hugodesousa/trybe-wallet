import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteDismiss } from '../redux/actions';

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

  removeitem = (id) => {
    const { remove } = this.props;
    remove(id);
  }

  render() {
    const { despesas } = this.props;

    // if (despesas.length === 0) {
    //   return <> </>;
    // }
    return (
      <table className="table-responsive">
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
              <td className="despTable">{ desp.description }</td>
              <td className="despTable">{ desp.tag }</td>
              <td className="despTable">{ desp.method }</td>
              <td className="despTable">{ this.valueInput(desp.value) }</td>
              <td className="despTable">{ desp.exchangeRates[desp.currency].name }</td>
              <td className="despTable">{ this.tableValues(desp, null) }</td>
              <td className="despTable">
                {' '}
                { this.tableValues(desp, desp.exchangeRates) }
              </td>
              <td className="despTable">Real</td>
              <td className="despTable">
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ () => this.removeitem(desp.id) }
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

const mapDispatchToProps = (dispatch) => ({
  remove: (payload) => {
    dispatch(deleteDismiss(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  despesas: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
};
