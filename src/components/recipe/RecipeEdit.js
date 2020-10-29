import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipe, editRecipe} from '../../actions';
import RecipeForm from './RecipeForm';

class RecipeEdit extends React.Component {
    componentDidMount() {
        this.props.fetchRecipe(this.props.match.params.id)
    }

    onSubmit = formValues => {
        this.props.editRecipe(this.props.match.params.id, formValues);
    };

    renderIngredients() {
        const ingredientObjectArray = this.props.recipe.ingredients;
        const ingredients = []

        for (let index = 0; index < ingredientObjectArray.length; index++) {
            ingredients.push(<li key={index}>{ingredientObjectArray[index][index]}</li>)
        }
        return ingredients
    }

    render() {
        if (!this.props.recipe) {
            return <div> Loading... </div>
        }
        return (
            <div>
                <h3> Edit a Recipe </h3>
                <RecipeForm
                    initialValues={_.pick(this.props.recipe, 
                        'title', 'description', 'people', 'time', 'price','ingredients', 'step')}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    } 
}

const mapStateToProps = (state, ownProps) => {
    return { recipe: state.recipes[ownProps.match.params.id]};
};

export default connect (
    mapStateToProps,
    { fetchRecipe, editRecipe }
)(RecipeEdit)