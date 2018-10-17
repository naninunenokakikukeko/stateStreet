import React from 'react'
import PropTypes from 'prop-types'
import { TransactionShape } from './Transaction'
import Transaction from './Transaction'

const Transactions = ({ dataContent, onClick }) => (
    <div className="transactions">
        <table>
            <thead>
                <tr>
                    <th>ACCOUNT NO.</th>
                    <th>ACCOUNT NAME</th>
                    <th>CURRENCY</th>
                    <th>AMOUNT</th>
                    <th>TRANSACTION TYPE</th>
                </tr>
            </thead>
            <tbody>
                {dataContent.map((transaction, index) =>
                    <Transaction
                        key={transaction.account}
                        dataContent={transaction}
                        onClick={(event) => onClick(transaction)}
                        isTableRow={true}
                    />
                )}
            </tbody>
        </table>
    </div>
)

Transactions.propTypes = {
    dataContent: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape(TransactionShape).isRequired).isRequired).isRequired,
    onClick: PropTypes.func.isRequired
}

export default Transactions
