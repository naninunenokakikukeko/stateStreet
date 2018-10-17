export const AccountFilters = {
    SAVINGS: 'Savings Account',
    CHECKING: 'Checking Account',
    AUTO_LOAN: 'Auto Loan Account',
    CREDIT_CARD: 'Credit Card Account',
    INVESTMENT: 'Investment Account',
    PERSONAL_LOAN: 'Personal Loan Account',
    MONEY_MARKET: 'Money Market Account',
    HOME_LOAN: 'Home Loan Account'
}

export const TransactionFilters = {
    DEPOSIT: 'deposit',
    WITHDRAWL: 'withdrawal',
    INVOICE: 'invoice',
    PAYMENT: 'payment'
}

export const setAccountFilter = filter => ({
    type: 'SET_ACCOUNT_FILTER',
    filter
})

export const unsetAccountFilter = filter => ({
    type: 'UNSET_ACCOUNT_FILTER',
    filter
})

export const setTransactionFilter = filter => ({
    type: 'SET_TRANSACTION_FILTER',
    filter
})

export const unsetTransactionFilter = filter => ({
    type: 'UNSET_TRANSACTION_FILTER',
    filter
})

export const showTransaction = transaction => ({
    type: 'SHOW_TRANSACTION',
    transaction
})