import React, { Component } from 'react';

export default class WalletForm extends Component {
  render() {
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
        </form>
      </div>
    );
  }
}
