import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    console.log('test');
    return (
      <div>
        <div> test 2</div>
        <Header />
        <WalletForm />
        <Table />

      </div>);
  }
}

export default Wallet;
