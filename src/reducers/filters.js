const Filters = (state = {
    accounts: [],
    transactions: []
}, action) => {
    let values;
    let stateNew;
    switch (action.type) {
        case 'SET_ACCOUNT_FILTER':
            values = state.accounts.slice().concat(action.filter);
            stateNew = Object.assign({}, state, { accounts: values });
            return stateNew;
        case 'UNSET_ACCOUNT_FILTER':
            values = state.accounts.slice();
            values.splice(values.indexOf(action.filter), 1);
            stateNew = Object.assign({}, state, { accounts: values });
            return stateNew;
        case 'SET_TRANSACTION_FILTER':
            values = state.transactions.slice().concat(action.filter);
            stateNew = Object.assign({}, state, { transactions: values });
            return stateNew;
        case 'UNSET_TRANSACTION_FILTER':
            values = state.transactions.slice();
            values.splice(values.indexOf(action.filter), 1);
            stateNew = Object.assign({}, state, { transactions: values });
            return stateNew;
        default:
            return state;
    }
}

export default Filters
