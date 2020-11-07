import React from 'react';
import { connect } from 'react-redux'; 
import { fetchProducts, addToShoppingList, fetchShoppingListProducts} from '../../actions';
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
                <div className="right floated content">
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
        this.props.shoppingList.map(products => {
            productList.push(products.product_id);
        });
        if (productList.includes(product.id)) {
            console.log('ik voeg hem niet toe');
        } else {
            console.log('ik heb hem toegevoegd')
            this.props.addToShoppingList(product.id, product.title, product.price, product.url);
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

    render () {
        return (
            <div> 
                <h2> Product </h2>
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
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchProducts, addToShoppingList, fetchShoppingListProducts }) (ProductList);