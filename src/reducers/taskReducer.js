import _ from 'lodash';
import {
    ADD_TASK,
    DELETE_TASK,
    COMPLETE_TASK,
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case COMPLETE_TASK:
            return {...state, [action.payload.id]: action.payload };
        case ADD_TASK:
            return {...state, [action.payload.id]: action.payload };
        case DELETE_TASK:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};