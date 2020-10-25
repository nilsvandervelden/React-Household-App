import recipes from '../apis/recipes';
import history from '../history'
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_RECIPE,
    FETCH_RECIPE,
    FETCH_RECIPES,
    DELETE_RECIPE,
    EDIT_RECIPE,
}   from './types';

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

export const createRecipe = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await recipes.post('/recipes', {...formValues, userId });

    dispatch({ type: CREATE_RECIPE, payload: response.data });
    history.push('/')
};
