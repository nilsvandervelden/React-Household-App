import _ from 'lodash';
import {
    ADD_TO_SHOPPING_LIST,
    FETCH_SHOPPING_LIST_PRODUCTS,
    EDIT_SHOPPING_LIST_PRODUCT,
    FETCH_SHOPPING_LIST_PRODUCT,
    CHANGE_SHOPPING_LIST_PRODUCT_COUNT,
    DELETE_SHOPPING_LIST_PRODUCT
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_SHOPPING_LIST:
            return {...state, [action.payload.id]: action.payload };
        case FETCH_SHOPPING_LIST_PRODUCTS:
            return {...state, ..._.mapKeys(action.payload, 'id') };
        case EDIT_SHOPPING_LIST_PRODUCT:
            return {...state, [action.payload.id]: action.payload };
        case CHANGE_SHOPPING_LIST_PRODUCT_COUNT:
            return {...state, [action.payload.id]: action.payload };
         case FETCH_SHOPPING_LIST_PRODUCT:
            return {...state, [action.payload.id]: action.payload };
        case DELETE_SHOPPING_LIST_PRODUCT:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};