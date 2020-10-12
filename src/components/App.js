import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RecipeList from './recipe/RecipeList';
import RecipeCreate from './recipe/RecipeCreate';
import RecipeDelete from './recipe/RecipeDelete';
import RecipeEdit from './recipe/RecipeEdit';
import RecipeShow from './recipe/RecipeShow';
import Header from './Header';

const App = () => {
  return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={RecipeList} />
                    <Route path="/recipe/new" exact component={RecipeCreate} />
                    <Route path="/recipe/edit" exact component={RecipeEdit} />
                    <Route path="/recipe/delete" exact component={RecipeDelete} />
                    <Route path="/recipe/show" exact component={RecipeShow} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
