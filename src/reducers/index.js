import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; 
import authReducer from './authReducer';
import recipeReducer from './recipeReducer';
import todoReducers from './todoReducer';
import productReducer from './productReducer';
import shoppingListReducer from './shoppingListReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    recipes: recipeReducer,
    todos: todoReducers,
    products: productReducer,
    shoppingList: shoppingListReducer
});
