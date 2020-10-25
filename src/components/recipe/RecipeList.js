import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipes } from '../../actions';

class RecipeList extends React.Component {
    componentDidMount() {
        this.props.fetchRecipes();
    }

    renderAdmin(recipe) {
        if (recipe.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/recipe/edit/${recipe.id}`} className="ui button primary">
                        EDIT
                    </Link>
                    <Link
                        to={`/recipe/delete/${recipe.id}`}
                        className="ui button negative"
                    >
                        Delete
                    </Link>
                </div>
            );
        }
    }

    renderList() {
        return this.props.recipes.map(recipe => {
            return (
                <div className="item" key={recipe.id}>
                    {this.renderAdmin(recipe)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {recipe.title}
                        <div className="time">{`${recipe.time} min`}</div>
                    </div>
                </div>
            );
        });
    }


    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/recipe/new" className="ui button primary">
                        Create Recipe
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h2>Recipes</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        recipes: Object.values(state.recipes),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(
    mapStateToProps,
    { fetchRecipes }
  )(RecipeList);
