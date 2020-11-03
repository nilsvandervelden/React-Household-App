import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllGroceries, deleteGroceries } from '../../actions';

class GroceriesDelete extends React.Component {
    componentDidMount() {
        this.props.fetchAllGroceries(this.props.match.params.id);
    }

    renderActions() {
        const id = this.props.match.params.id;
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteGroceries(id)} className="ui button negative">Delete</button> 
                <Link to="/" className="ui button"> Cancel </Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if(!this.props.groceries) {
            return 'Are you sure you want to delete this product?'
        }
        return `Are you sure you want to delete the product with title: ${this.props.groceries.title}`
    }
    
    render(){
        return (
            <Modal
                title="Delete Product"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/groceries')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { groceries: state.groceries[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {fetchAllGroceries, deleteGroceries})(GroceriesDelete);