import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Transaction from '../components/Transaction'

const mapStateToProps = (state, ownProps) => {
    let transaction = state.transactions.find(transaction =>
        transaction.account === ownProps.match.params.account
    );
    return {
        dataContent: transaction,
        isTableRow: false
    };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Transaction))
