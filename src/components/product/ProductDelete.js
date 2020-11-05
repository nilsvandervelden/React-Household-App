import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, deleteProduct } from '../../actions';

class ProductDelete extends React.Component {
    componentDidMount() {
        this.props.fetchProducts(this.props.match.params.id);
    }

    renderActions() {
        const id = this.props.match.params.id;
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteProduct(id)} className="ui button negative">Delete</button> 
                <Link to="/" className="ui button"> Cancel </Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if(!this.props.product) {
            return 'Are you sure you want to delete this product?'
        }
        return `Are you sure you want to delete the product with title: ${this.props.product.title}`
    }
    
    render(){
        return (
            <Modal
                title="Delete Product"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/product')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { product: state.products[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {fetchProducts, deleteProduct})(ProductDelete);