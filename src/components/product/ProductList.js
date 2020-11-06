import React from 'react';
import { connect } from 'react-redux'; 
import { fetchProducts } from '../../actions';
import { Link } from 'react-router-dom';
import '../../stylesheets/Product.css';

class ProductList extends React.Component {
    componentDidMount(){
        this.props.fetchProducts();
    }

    renderAdmin(products) {
        if (products.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`products/edit/${products.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`products/delete/${products.id}`}className="ui button negative">
                        Delete
                    </Link>
                </div>
            );
        }
    }

    renderList () {
        return this.props.products.map(product => {
            return (
                <div className="card" key={product.id}>
                    <div className="image">
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

                //     </div>
                //     {this.renderAdmin(product)}
                //     <i className="large middle aligned icon camera" />
                //     <div className="content">
                //         <Link to={`/products/${product.id}`} className="header">
                //             {product.title}
                //         </Link>
                //         <div className="description">{product.description}</div>
                //     </div>
                // </div>
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
                <div className="ui five stackable cards"> {this.renderList()} </div>
                {this.renderCreate()}
            </div>
        ); 
    }
}

const mapStateToProps = (state) => {
    return { 
        products: Object.values(state.products),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchProducts }) (ProductList);