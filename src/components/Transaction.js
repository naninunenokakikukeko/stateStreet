import React from 'react'
import PropTypes from 'prop-types'

const Transaction = ({ dataContent, onClick, isTableRow }) => {
    if (isTableRow) {
        return (
            <tr>
                <td><a href={'/transactions/' + dataContent.account} onClick={onClick}>{dataContent.account}</a></td>
                <td>{dataContent.accountName}</td>
                <td>{dataContent.currencyCode}</td>
                <td>{dataContent.amount}</td>
                <td>{dataContent.transactionType}</td>
            </tr>
        );
    } else {
        return (
            <div className="transaction">
                <h1>Transaction {dataContent.account}</h1>
                <hr></hr>
                <dl>
                    <dd>Account Name:</dd>
                    <dt>{dataContent.accountName}</dt>
                    <dd>Currency Code:</dd>
                    <dt>{dataContent.currencyCode}</dt>
                    <dd>Amount:</dd>
                    <dt>{dataContent.amount}</dt>
                    <dd>Transaction Type:</dd>
                    <dt>{dataContent.transactionType}</dt>
                </dl>
            </div>
        );
    }
}

export const TransactionShape = {
    account: PropTypes.string,
    accountName: PropTypes.string,
    mask: PropTypes.string,
    amount: PropTypes.number,
    transactionType: PropTypes.string,
    currencyCode: PropTypes.string,
    currencyName: PropTypes.string,
    currencySymbol: PropTypes.string,
    iban: PropTypes.string,
    bic: PropTypes.string
};

Transaction.propTypes = {
    //dataContent: PropTypes.objectOf(PropTypes.shape(TransactionShape).isRequired).isRequired,
    dataContent: PropTypes.shape(TransactionShape),
    onClick: PropTypes.func.isRequired,
    isTableRow: PropTypes.bool
}

export default Transaction
