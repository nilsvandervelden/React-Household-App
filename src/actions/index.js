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
    history.push('/');
};

export const fetchRecipes = () => async dispatch => {
    const response = await recipes.get('/recipes');
  
    dispatch({ type: FETCH_RECIPES, payload: response.data });
};

export const fetchRecipe = (id) => async dispatch => {
    const response = await recipes.get(`/recipes/${id}`);
  
    dispatch({ type: FETCH_RECIPE, payload: response.data });
};

export const editRecipe = (id, formValues) => async dispatch => {
    const response = await recipes.patch(`/streams/${id}`, formValues);

    dispatch({ type: EDIT_RECIPE, payload: response.data });
    history.push('/');
};

export const deleteRecipe = id => async dispatch => {
    await recipes.delete(`/recipes/${id}`);
    console.log('test');

    dispatch({ type: DELETE_RECIPE, payload: id });
    history.push('/')
};
