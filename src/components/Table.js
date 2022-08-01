import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { despesas } = this.props;
    console.log(despesas);
    if (despesas.length === 0) {
      return <> </>;
    }
    return (
      <table>
        <tbody>

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
          {despesas.map((desp) => (
            <th key={ desp.id }>
              <td>{ desp.description }</td>
              <td>{ desp.tag }</td>
              <td>{ desp.method }</td>
              <td>{ desp.value }</td>
              <td>{ desp.currency }</td>
              <td>{ desp.tag }</td>
              <td>BRL</td>

            </th>

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
// export default Table;

Table.propTypes = {
  despesas: PropTypes.arrayOf(PropTypes.object).isRequired,
};
