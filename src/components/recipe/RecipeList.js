import React from 'react';
import '../../stylesheets/Header.css';
import '../../stylesheets/Card.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipes } from '../../actions';
import Banner from './RecipeBanner'

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
                        <div className="card">
                            <Link className="image">
                                <img src={recipe.image}></img>
                            </Link>
                            <div className="meta">
                                <div className="ui centered grid">
                                    <div className="five wide column">
                                        <i className="clock outline icon"></i>
                                        {`${recipe.time} min`}
                                    </div>
                                    <div className="five wide column">
                                        <i className="euro sign icon"></i>
                                        {`${recipe.price}`}
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <div className="title-header">
                                    {recipe.title}
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
                <div className="banner">
                    <Banner></Banner>
                </div>
                <div className="header">
                    <h1> Wat eten we vandaag? </h1>
                    <h2> Allemaal snackies </h2>
                </div>
                <div>
                    <div className="ui centered grid">{this.renderList()}</div>
                    {this.renderCreate()}
                </div>
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
