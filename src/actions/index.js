import recipes from '../apis/recipes';
import { SIGN_IN, SIGN_OUT } from './types';
import { formValues } from 'redux-form';

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createRecipe = formValues => async dispatch => {
    recipes.post('/streams', formValues);
};
