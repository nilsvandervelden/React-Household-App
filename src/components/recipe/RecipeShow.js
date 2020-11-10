import React from 'react';
import '../../stylesheets/RecipeShow.css';
import { connect } from 'react-redux';
import { fetchRecipe } from '../../actions';

class RecipeShow extends React.Component{
    componentDidMount() {
        this.props.fetchRecipe(this.props.match.params.id);
    }

    renderBannner = () => {
        return (
            <header className="banner">
                <img src={this.props.recipe.image} alt="Couldn't load image"></img>
            </header>
        )
    }

    renderSteps() {
        const stepsObjectArray = this.props.recipe.step;
        const steps = []

        for (let index = 0; index < stepsObjectArray.length; index++) {
            steps.push(<li className="step" key={index}>{stepsObjectArray[index][index] }</li>)
        }
        return steps;
    }

    renderIngredients() {
        const ingredientObjectArray = this.props.recipe.ingredients;
        const ingredients = []

        for (let index = 0; index < ingredientObjectArray.length; index++) {
            ingredients.push(<li className="ingredient" key={index}>{ingredientObjectArray[index][index]}</li>)
        }
        return ingredients
    }

    renderList() {
        if (!this.props.recipe) {
            return <div>Loading...</div>
        }
        const {title, description} = this.props.recipe;

        return (
            <div>
                <div className="title">
                    <h1>{title} </h1>
                </div>
                <div className="description">
                    <h2>{description} </h2>
                </div>
                {this.renderBannner()}
                <div className="ui two column very relaxed stackable grid">
                    <div className="column">
                        <h3> Ingredients: </h3>
                        <div className="item">
                            <div className="middle aligned content">
                                {this.renderIngredients()}
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <h3> Steps: </h3>
                        <ol className="item">
                            <div className="middle aligned content">
                            {this.renderSteps()}
                            </div>
                        </ol>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="ui grid">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    //console.log(ownProps);
    return { recipe: state.recipes[ownProps.match.params.id] };
;}

export default connect(
    mapStateToProps,
    { fetchRecipe }
)(RecipeShow);