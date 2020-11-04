import React from 'react';
import '../../stylesheets/Banner.css';
import '../../stylesheets/Header.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipes } from '../../actions';

class RecipeList extends React.Component {
    componentDidMount() {
        this.props.fetchRecipes();
    }

    renderBanner() {
        return (
            <header className="banner-image">
                <div className="banner-text"> 
                    <h1>Hallo</h1>
                </div>
            </header>
        )
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
                            <a className="image">
                                <img src={recipe.image}></img>
                            </a>
                            <div className="content">
                                <Link to={`/recipes/${recipe.id}`} className="link-header">
                                    <div className="title-header">
                                        {recipe.title}
                                    </div>
                                </Link>
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
                <div className="banner">
                    {this.renderBanner()}
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
