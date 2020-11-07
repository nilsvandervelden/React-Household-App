import _ from 'lodash';
import {
    ADD_TO_SHOPPING_LIST,
    FETCH_SHOPPING_LIST_PRODUCTS
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_SHOPPING_LIST:
            return {...state, [action.payload.id]: action.payload };
        case FETCH_SHOPPING_LIST_PRODUCTS:
            return {...state, ..._.mapKeys(action.payload, 'id') };
        default:
            return state;
    }
};