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

import GroceriesList from './groceries/GroceriesList';
import GroceriesCreate from './groceries/GroceriesCreate';
import GroceriesDelete from './groceries/GroceriesDelete';
import GroceriesEdit from './groceries/GroceriesEdit.js';

import LandingPage from './LandingPage';

import Header from './Header';
import history from '../history';

const App = () => {
  return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={LandingPage} />

                        <Route path="/recipes" exact component={RecipeList} />
                        <Route path="/recipes/new" exact component={RecipeCreate} />
                        <Route path="/recipes/edit/:id" exact component={RecipeEdit} />
                        <Route path="/recipes/delete/:id" exact component={RecipeDelete} />
                        <Route path="/recipes/:id" exact component={RecipeShow} />

                        <Route path="/todos" exact component={TodoList} />
                        <Route path="/todos/new" exact component={TodoCreate} />
                        <Route path="/todos/edit/:id" exact component={TodoEdit} />
                        <Route path="/todos/delete/:id" exact component={TodoDelete} />

                        <Route path="/groceries" exact component={GroceriesList} />
                        <Route path="/groceries/new" exact component={GroceriesCreate} />
                        <Route path="/groceries/edit/:id" exact component={GroceriesEdit} />
                        <Route path="/groceries/delete/:id" exact component={GroceriesDelete} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
