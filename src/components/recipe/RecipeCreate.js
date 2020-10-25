import React from 'react';
import { connect } from 'react-redux';
import { createRecipe } from '../../actions';
import RecipeForm from './RecipeForm';

class RecipeCreate extends React.Component {
    onSubmit = formValues => {
        this.props.createRecipe(formValues);
    };

    render() {
        return (
            <div>
                <h3>Create a Recipe</h3>
                <RecipeForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(
    null, 
    { createRecipe }
)(RecipeCreate);

