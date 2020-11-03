import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; 
import authReducer from './authReducer';
import recipeReducer from './recipeReducer';
import todoReducers from './todoReducers';
import groceriesReducer from './groceriesReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    recipes: recipeReducer,
    todos: todoReducers,
    groceries: groceriesReducer
});
