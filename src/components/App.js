import React from 'react';
import { Route, Router, Switch} from 'react-router-dom';
import RecipeList from './recipe/RecipeList';
import RecipeCreate from './recipe/RecipeCreate';
import RecipeDelete from './recipe/RecipeDelete';
import RecipeEdit from './recipe/RecipeEdit';
import RecipeShow from './recipe/RecipeShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={RecipeList} />
                        <Route path="/recipes/new" exact component={RecipeCreate} />
                        <Route path="/recipes/edit/:id" exact component={RecipeEdit} />
                        <Route path="/recipes/delete/:id" exact component={RecipeDelete} />
                        <Route path="/recipes/:id" exact component={RecipeShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
