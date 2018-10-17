const transaction = (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_TRANSACTION':
            let stateNew = action.transaction;
            return stateNew;
        default:
            return state
    }
}

export default transaction
