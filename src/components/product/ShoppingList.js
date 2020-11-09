import React from 'react';
import { connect } from 'react-redux';
import { fetchShoppingListProducts, fetchShoppingListProduct } from '../../actions';
import { Link } from 'react-router-dom';
import '../../stylesheets/Dot.css';


class ShoppingList extends React.Component {
    componentDidMount() {
        this.props.fetchShoppingListProducts();
    }

    renderAdmin(shoppingListProduct) {
        return (
            <div className="right floated content">
                <Link to={`shoppingList/delete/${shoppingListProduct.id}`} className="ui button negative">
                    Remove
                </Link>
            </div>
        );
    }

    renderList() {
        return this.props.shoppingList.map(shoppingListProduct => {
            return(
                <div className="item" key={shoppingListProduct.id}>
                    {this.renderAdmin(shoppingListProduct)}
                    <div className="ui tiny image"> 
                        <img src={shoppingListProduct.url}></img>
                    </div>
                    <div className="content">
                        <h3 className="title">{shoppingListProduct.title}</h3>
                        <h4 className="price">{shoppingListProduct.price}</h4>
                    </div>
                </div>
            );
        });
    }
 

    renderAdd() {
        if (this.props.isSignedIn) {
            return (
                <div style={{textAlign: "right"}}>
                    <Link to="/products" className="ui button primary">
                        Add Products
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div className="banner">
                </div>
                <h2> Groceries </h2>
                <div className="ui celled list"> {this.renderList()} </div>
                {this.renderAdd()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        shoppingList: Object.values(state.shoppingList),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(
    mapStateToProps,
    { fetchShoppingListProducts, fetchShoppingListProduct }
  )(ShoppingList);