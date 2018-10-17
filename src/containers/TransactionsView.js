import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { showTransaction } from '../actions';
import { transactionFilterMap } from '../components/Filters'
import Transactions from '../components/Transactions'

const getVisibleTransactions = (transactions = [], accountFilters = [], transactionFilters = []) => {
    let result = transactions.slice();

    if (accountFilters.length > 0) {
        result = result.filter(transaction => {
            for (let accountFilter of accountFilters) {
                if (transaction.accountName === accountFilter)
                    return true;
            }
            return false;
        });
    }

    if (transactionFilters.length > 0) {
        result = result.filter(transaction => {
            for (let transactionFilter of transactionFilters) {
                if (transaction.transactionType === transactionFilterMap[transactionFilter])
                    return true;
            }
            return false;
        });
    }
    return result;
}

const mapStateToProps = (state, ownProps) => ({
    dataContent: getVisibleTransactions(state.transactions, state.filters.accounts, state.filters.transactions)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: transaction => dispatch(showTransaction(transaction))
})

export default  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Transactions))
