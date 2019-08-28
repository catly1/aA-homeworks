import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session';

const _nullSession = {
    currentUser: null,
}

export default (state = _nullSession, action) => {
    Object.freeze(state);
    // debugger
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger
            return Object.assign({}, { currentUser: action.user });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
}