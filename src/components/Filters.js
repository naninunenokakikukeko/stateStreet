import React from 'react'
import PropTypes from 'prop-types'

export const accountFilters = [
    'Savings Account',
    'Checking Account',
    'Auto Loan Account',
    'Credit Card Account',
    'Investment Account',
    'Personal Loan Account',
    'Money Market Account',
    'Home Loan Account',
];

export const accountFilterMap = {
    'Savings Account': 'Savings Account',
    'Checking Account': 'Checking Account',
    'Auto Loan Account': 'Auto Loan Account',
    'Credit Card Account': 'Credit Card Account',
    'Investment Account': 'Investment Account',
    'Personal Loan Account': 'Personal Loan Account',
    'Money Market Account': 'Money Market Account',
    'Home Loan Account': 'Home Loan Account',
};

export const transactionFilters = [
    'Deposit',
    'Withdrawal',
    'Invoice',
    'Payment'
];

export const transactionFilterMap = {
    'Deposit': 'deposit',
    'Withdrawal': 'withdrawal',
    'Invoice': 'invoice',
    'Payment': 'payment'
};

const FiltersShape = {};
accountFilters.concat(transactionFilters).forEach(filter => FiltersShape[filter] = PropTypes.bool);

const Filters = ({ dataContent, onChangeAccountFilter, onChangeTransactionFilter }) => (
    <div className="filters">
        <h4>Filters</h4>
        <div className="accountFilter">
            <h5>Account Name</h5>
            <ul>
                {accountFilters.map((filter, index) =>
                    <li key={filter}><input type="checkbox" value={filter} checked={dataContent[filter]} onChange={onChangeAccountFilter} />&nbsp;{filter}</li>
                )}
            </ul>
        </div>
        <div className="transactionFilter">
            <h5>Transaction Type</h5>
            <ul>
                {transactionFilters.map((filter, index) =>
                    <li key={filter}><input type="checkbox" value={filter} checked={dataContent[filter]} onChange={onChangeTransactionFilter} />&nbsp;{filter}</li>
                )}
            </ul>
        </div>
    </div>
)

Filters.propTypes = {
    dataContent: PropTypes.objectOf(PropTypes.shape(FiltersShape).isRequired).isRequired,
    onChangeAccountFilter: PropTypes.func.isRequired,
    onChangeTransactionFilter: PropTypes.func.isRequired
}

export default Filters
