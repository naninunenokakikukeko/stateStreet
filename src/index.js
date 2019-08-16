import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import TransactionView from './containers/TransactionView';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import data from './data/data.json';

const defaultState = {
    transactions: data.transactions,
    transaction: {},
    filters: {
        accounts: [],
        transactions: []
    }
}

ReactDOM.render(
    <Provider store={configureStore(defaultState)}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/transactions/:account" component={TransactionView} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
