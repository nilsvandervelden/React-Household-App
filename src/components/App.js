import React from 'react';
import { Route, Router, Switch} from 'react-router-dom';
import RecipeList from './recipe/RecipeList';
import RecipeCreate from './recipe/RecipeCreate';
import RecipeDelete from './recipe/RecipeDelete';
import RecipeEdit from './recipe/RecipeEdit';
import RecipeShow from './recipe/RecipeShow';

import TodoList from './todo/TodoList';
import TodoCreate from './todo/TodoCreate';
import TodoDelete from './todo/TodoDelete';
import TodoEdit from './todo/TodoEdit.js';

import ProductList from './product/ProductList';
import ProductCreate from './product/ProductCreate';
import ProductDelete from './product/ProductDelete';
import ProductEdit from './product/ProductEdit.js';

import Header from './Header';
import history from '../history';
import ShoppingList from './product/ShoppingList';

const App = () => {
  return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>

                        <Route path="/recipes" exact component={RecipeList} />
                        <Route path="/recipes/new" exact component={RecipeCreate} />
                        <Route path="/recipes/edit/:id" exact component={RecipeEdit} />
                        <Route path="/recipes/delete/:id" exact component={RecipeDelete} />
                        <Route path="/recipes/:id" exact component={RecipeShow} />
                        <Route path="/shoppingList" exact component={ShoppingList} />

                        <Route path="/todos" exact component={TodoList} />
                        <Route path="/todos/new" exact component={TodoCreate} />
                        <Route path="/todos/edit/:id" exact component={TodoEdit} />
                        <Route path="/todos/delete/:id" exact component={TodoDelete} />

                        <Route path="/products" exact component={ProductList} />
                        <Route path="/products/new" exact component={ProductCreate} />
                        <Route path="/products/edit/:id" exact component={ProductEdit} />
                        <Route path="/products/delete/:id" exact component={ProductDelete} />

                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
