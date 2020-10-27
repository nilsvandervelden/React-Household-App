import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipe } from '../../actions';

class RecipeShow extends React.Component{
    componentDidMount() {
        this.props.fetchRecipe(this.props.match.params.id);
    }

    renderIngredients() {
        const recipeArray = this.props.recipe.step;
        var index
        for (index = 0; index <= recipeArray.length; index++) {
            console.log(recipeArray[index][0])
        }
    }

    render() {
        if (!this.props.recipe) {
            return <div>Loading...</div>
        }

        const {title, description} = this.props.recipe;

        return (
            <div>
                <h1>{this.props.recipe.title} </h1>
                <h5>{this.props.recipe.description} </h5>
                {/* <h5>{recipeArray[0][0]} </h5> */}
                <h5>{this.renderIngredients()}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { recipe: state.recipes[ownProps.match.params.id] };
;}

export default connect(
    mapStateToProps,
    { fetchRecipe }
)(RecipeShow);