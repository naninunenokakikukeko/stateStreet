import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FiltersView from './containers/FiltersView';
import TransactionsView from './containers/TransactionsView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Transactions</h1>
        <hr></hr>
        <FiltersView />
        <TransactionsView />
      </div>
    );
  }
}

export default App;
