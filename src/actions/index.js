import api from '../apis/api';
import history from '../history'
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_RECIPE,
    FETCH_RECIPE,
    FETCH_RECIPES,
    DELETE_RECIPE,
    EDIT_RECIPE,

    CREATE_TODO,
    FETCH_TODOS,
    FETCH_TODO,
    EDIT_TODO,
    DELETE_TODO,

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

// RECIPES
export const createRecipe = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await api.post('/recipes', {...formValues, userId });

    dispatch({ type: CREATE_RECIPE, payload: response.data });
    history.push('/');
};

export const fetchRecipes = () => async dispatch => {
    const response = await api.get('/recipes');
  
    dispatch({ type: FETCH_RECIPES, payload: response.data });
};

export const fetchRecipe = (id) => async dispatch => {
    const response = await api.get(`/recipes/${id}`);
  
    dispatch({ type: FETCH_RECIPE, payload: response.data });
};

export const editRecipe = (id, formValues) => async dispatch => {
    const response = await api.patch(`/recipes/${id}`, formValues);

    dispatch({ type: EDIT_RECIPE, payload: response.data });
    history.push('/');
};

export const deleteRecipe = id => async dispatch => {
    await api.delete(`/recipes/${id}`);

    dispatch({ type: DELETE_RECIPE, payload: id });
    history.push('/')
};

// TODO'S
export const createTodo = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await api.post('/todos', {...formValues, userId });

    dispatch({ type: CREATE_TODO, payload: response.data });
    history.push('/');
};

export const fetchTodos = () => async dispatch => {
    const response = await api.get('/todos');
  
    dispatch({ type: FETCH_TODOS, payload: response.data });
};

export const fetchTodo = (id) => async dispatch => {
    const response = await api.get(`/todos/${id}`);
  
    dispatch({ type: FETCH_TODO, payload: response.data });
};

export const editTodo = (id, formValues) => async dispatch => {
    const response = await api.patch(`/todos/${id}`, formValues);

    dispatch({ type: EDIT_TODO, payload: response.data });
    history.push('/');
};

export const deleteTodo = id => async dispatch => {
    await api.delete(`/todos/${id}`);

    dispatch({ type: DELETE_TODO, payload: id });
    history.push('/')
};
