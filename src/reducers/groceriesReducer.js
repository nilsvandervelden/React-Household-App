import _ from 'lodash';
import {
    CREATE_GROCERIES,
    FETCH_ALL_GROCERIES,
    FETCH_GROCERIES,
    DELETE_GROCERIES,
    EDIT_GROCERIES,
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_GROCERIES:
            return {...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_GROCERIES:
            return {...state, [action.payload.id]: action.payload };
        case CREATE_GROCERIES:
            return {...state, [action.payload.id]: action.payload };
        case EDIT_GROCERIES:
            return {...state, [action.payload.id]: action.payload };
        case DELETE_GROCERIES:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};