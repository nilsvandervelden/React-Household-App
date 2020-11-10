import React from 'react';
import { connect } from 'react-redux'; 
import { fetchProducts, addToShoppingList, fetchShoppingListProducts, editShoppingListProduct, fetchShoppingListProduct} from '../../actions';
import { Link } from 'react-router-dom';
import '../../stylesheets/Product.css';

class ProductList extends React.Component {

    componentDidMount(){
        this.props.fetchProducts();
        this.props.fetchShoppingListProducts();
    }

    renderAdmin(product) {
        if (product.userId === this.props.currentUserId) {
            return (
                <div className="content">
                    <Link to={`products/edit/${product.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`products/delete/${product.id}`}className="ui button negative">
                        Delete
                    </Link>
                </div>
            );
        }
    }


    addToList = (product) => {
        var productList = [];
        var productIdList = [];
        this.props.shoppingList.map(products => {
            productIdList.push(products.product_id);
            productList.push(products);
        });
        if (productIdList.includes(product.id)) {
            this.props.shoppingList.map(products => {
                if(this.props.shoppingListProduct[products.id].product_id === product.id) {
                    var count = (this.props.shoppingListProduct[products.id].count);
                    count += 1;
                    this.props.editShoppingListProduct(products.id, products.product_id, product.title, product.price, product.url, count);
                }
            });
        } else {
            var count = 1;
            this.props.addToShoppingList(product.id, product.title, product.price, product.url, count);
        }
    }

    renderList () {
        return this.props.products.map(product => {
            return (
                <div className="card" key={product.id}>
                    <div className="image" onClick={() => this.addToList(product)}>
                        <img src={product.url}></img>
                    </div>
                    <div className="content">
                        <a className="text">
                            <div className="ui grid">
                                <div className="eight wide column"> 
                                    <h1>{product.title}</h1>
                                </div>
                                <div className="eight wide column">  
                                    <h3>{product.price}</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            );
        });
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{textAlign: "right"}}>
                    <Link to="/products/new" className="ui button primary">
                        Add Product
                    </Link>
                </div>
            );
        }
    }

    productCount() {
        var productCount = 0;
        this.props.shoppingList.map(product => {
            productCount += (product.count);
        });
        return (
            <div className="product-count"> 
                <h2>{productCount}</h2>
            </div>
        );
    }

    render () {
        return (
            <div>
                <h2 className="product-header"> Products </h2>
                <div className="shopping_cart">
                    <Link to={`shoppingList`}>
                        <i className="shopping cart icon"></i>
                    </Link>
                    {this.productCount()}
                </div>
                <div className="ui five stackable cards"> {this.renderList()}  </div>
                {this.renderCreate()}
            </div>
        );           
    }
}

const mapStateToProps = (state) => {
    return { 
        products: Object.values(state.products),
        shoppingList: Object.values(state.shoppingList),
        shoppingListProduct: state.shoppingList,
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchProducts, addToShoppingList, fetchShoppingListProducts, editShoppingListProduct, fetchShoppingListProduct }) (ProductList);