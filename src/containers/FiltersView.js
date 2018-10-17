import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setAccountFilter, unsetAccountFilter, setTransactionFilter, unsetTransactionFilter, showTransaction } from '../actions'
import {accountFilters, transactionFilters} from '../components/Filters'
import Filters from '../components/Filters'

const dataContentDefault = {};
accountFilters.concat(transactionFilters).forEach( filter => dataContentDefault[filter] = false);

const getFilters = (accountFilters=[], transactionFilters=[]) => {
    let result = Object.assign({}, dataContentDefault);

    for (let filter of accountFilters) {
        result[filter] = true;
    }

    for (let filter of transactionFilters) {
        result[filter] = true;
    }

    return result;
}

const mapStateToProps = (state, ownProps) => ({
    dataContent: getFilters(state.filters.accounts, state.filters.transactions)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChangeAccountFilter: event => {
        dispatch(event.target.checked ? setAccountFilter(event.target.value) : unsetAccountFilter(event.target.value));
    },

    onChangeTransactionFilter: event => {
        dispatch(event.target.checked ? setTransactionFilter(event.target.value) : unsetTransactionFilter(event.target.value));
    }
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Filters))
