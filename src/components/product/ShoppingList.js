import React from 'react';
import { connect } from 'react-redux';
import { fetchShoppingListProducts, changeShoppingListProductCount, deleteShoppingListProduct } from '../../actions';
import { Link } from 'react-router-dom';
import '../../stylesheets/ShoppingList.css';


class ShoppingList extends React.Component {
    componentDidMount() {
        this.props.fetchShoppingListProducts();
    }

    incrementProduct = (product) => {
        var count = product.count;
        count += 1;
        this.props.changeShoppingListProductCount(product.id, product.product_id, product.title, product.price, product.url, count);           
    }

    decrementProduct = (product) => {
        if (product.count > 1) { 
        var count = product.count;
        count -= 1;
        this.props.changeShoppingListProductCount(product.id, product.product_id, product.title, product.price, product.url, count);          
        } else {
            this.deleteProduct(product)
        }
    }

    deleteProduct = (product) => {
        this.props.deleteShoppingListProduct(product.id)
    }

    renderAdmin(shoppingListProduct) {
        return (
            <div className="test">
                <div className="container">
                    <div className="delete_button">
                        <i onClick={() => this.deleteProduct(shoppingListProduct)} className="trash alternate outline icon"></i>
                    </div>
                    <div className="plus_button">
                        <button onClick={() => this.incrementProduct(shoppingListProduct)} className="w3-button w3-circle w3-teal"> + </button>
                    </div>
                    <div className="product_count">
                        <h3> {shoppingListProduct.count} </h3>
                    </div>
                    <div className="min_button">
                        <button onClick={() => this.decrementProduct(shoppingListProduct)} className="w3-button w3-circle w3-teal">-</button>
                    </div>
                </div>
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
                        <div className="centered">
                            <h3 className="title">{shoppingListProduct.title}</h3>
                            <h4 className="price">{`${shoppingListProduct.price} per stuk`}</h4>
                        </div>
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
        shoppingListProduct: state.shoppingList,
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(
    mapStateToProps,
    { fetchShoppingListProducts, changeShoppingListProductCount, deleteShoppingListProduct }
  )(ShoppingList);