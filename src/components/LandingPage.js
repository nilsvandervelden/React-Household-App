import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component{

    renderButtons() {
        return (
            <div className="center">
                <Link to="/recipes" className="ui animated button" tabIndex="0">
                    <div className="visible content">
                        Recipes
                    </div>
                    <div className="hidden content">
                        <i className="right arrow icon"></i>
                    </div>
                </Link>
                <Link to="/shoppingList" className="ui animated button" tabIndex="0">
                    <div className="visible content">
                        Shopping List
                    </div>
                    <div className="hidden content">
                        <i className="right arrow icon"></i>
                    </div>
                </Link>
                <Link to="/todos" className="ui vertical animated button" tabIndex="0">
                    <div className="visible content">
                        Todos
                    </div>
                    <div className="hidden content">
                        <i className="right arrow icon"></i>
                    </div>
                </Link>
                <Link to="/" className="ui animated fade button" tabIndex="0">
                    <div className="visible content">
                        Finances
                    </div>
                    <div className="hidden content">
                        <i className="right arrow icon"></i>
                    </div>
                </Link>
            </div>
        );
    }
    render() {
        return (
            <div> {this.renderButtons() } </div>
        )
    }
}

export default LandingPage;
