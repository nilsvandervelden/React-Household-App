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
                    <Link to={`/recipes/edit/${recipe.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/recipes/delete/${recipe.id}`} className="ui button negative">Delete</Link>
                </div>
            );
        }
    }

    renderList() {
        return this.props.recipes.map(recipe => {
            return (
                <div className="five wide column" key={recipe.id}>
                    <div className="ui cards">
                        <div className="ui link card">
                            <div className="content">
                                <h4 className="ui right floated icon header">
                                    <i className="circular utensils icon"></i>
                                </h4>
                                <div className="header">
                                    {recipe.title}
                                </div>
                                <div className="meta">
                                    {`${recipe.time} min`}
                                    <br></br>
                                    {`${recipe.people} people`}
                                    <br></br>
                                    {`${recipe.price} euro`}
                                </div>
                                <div className="description">
                                    {recipe.description}
                                </div>
                            </div>
                            <div className="extra content">
                                <div className="ui two buttons">
                                    {this.renderAdmin(recipe)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }


    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right', margin: 10}}>
                    <Link to="/recipes/new" className="ui button primary">
                        Create Recipe
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h2 className="ui center aligned icon header">
                    <i className="circular utensils icon"></i>
                    Wat eten we vandaag?
                </h2>
                <div className="ui grid">{this.renderList()}</div>
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
