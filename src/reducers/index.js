import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import filters from './filters'
import transactions from './transactions'
import transaction from './transaction'

export default combineReducers({
    filters,
    transactions,
    transaction,
    routing: routerReducer
})
