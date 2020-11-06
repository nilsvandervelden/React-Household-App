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

    CREATE_PRODUCT,
    FETCH_PRODUCT,
    FETCH_PRODUCTS,
    EDIT_PRODUCT,
    DELETE_PRODUCT,

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
    const response = await api.post('/todos', {...formValues, userId});

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

// PRODUCT

export const createProduct = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await api.post('/products', {...formValues, userId });

    dispatch({ type: CREATE_PRODUCT, payload: response.data });
    history.push('/products');
};

export const fetchProducts = () => async dispatch => {
    const response = await api.get('/products');
  
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async dispatch => {
    const response = await api.get(`/products/${id}`);
  
    dispatch({ type: FETCH_PRODUCT, payload: response.data });
};

export const editProduct = (id, formValues) => async dispatch => {
    const response = await api.patch(`/products/${id}`, formValues);

    dispatch({ type: EDIT_PRODUCT, payload: response.data });
    history.push('/products');
};

export const deleteProduct = id => async dispatch => {
    await api.delete(`/products/${id}`);

    dispatch({ type: DELETE_PRODUCT, payload: id });
    history.push('/products');
};
