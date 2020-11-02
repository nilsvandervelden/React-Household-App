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

    CREATE_GROCERIES,
    FETCH_GROCERIES,
    FETCH_ALL_GROCERIES,
    EDIT_GROCERIES,
    DELETE_GROCERIES,

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
    history.push('/recipes');
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
    history.push('/recipes');
};

export const deleteRecipe = id => async dispatch => {
    await api.delete(`/recipes/${id}`);

    dispatch({ type: DELETE_RECIPE, payload: id });
    history.push('/recipes')
};

// TODO'S
export const createTodo = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await api.post('/todos', {...formValues, userId });

    dispatch({ type: CREATE_TODO, payload: response.data });
    history.push('/todos');
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
    history.push('/todos');
};

export const deleteTodo = id => async dispatch => {
    await api.delete(`/todos/${id}`);

    dispatch({ type: DELETE_TODO, payload: id });
    history.push('/todos')
};

// GROCERIES

export const createGroceries = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await api.post('/groceries', {...formValues, userId });

    dispatch({ type: CREATE_GROCERIES, payload: response.data });
    history.push('/groceries');
};

export const fetchAllGroceries = () => async dispatch => {
    const response = await api.get('/groceries');
  
    dispatch({ type: FETCH_ALL_GROCERIES, payload: response.data });
};

export const fetchGroceries = (id) => async dispatch => {
    const response = await api.get(`/groceries/${id}`);
  
    dispatch({ type: FETCH_GROCERIES, payload: response.data });
};

export const editGroceries= (id, formValues) => async dispatch => {
    const response = await api.patch(`/groceries/${id}`, formValues);

    dispatch({ type: EDIT_GROCERIES, payload: response.data });
    history.push('/groceries');
};

export const deleteTodo = id => async dispatch => {
    await api.delete(`/groceries/${id}`);

    dispatch({ type: DELETE_GROCERIES, payload: id });
    history.push('/groceries');
};
