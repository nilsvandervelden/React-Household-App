import React from 'react';
import { connect } from 'react-redux'; 
import { fetchProducs } from '../../actions';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
    componentDidMount(){
        this.props.fetchProducs();
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
        return this.props.products.map(products => {
            return (
                <div className="item" key={products.id}>
                    {this.renderAdmin(products)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/products/${products.id}`} className="header">
                            {products.title}
                        </Link>
                        <div className="description">{products.description}</div>
                    </div>
                </div>
            );
        });
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{textAlign: "right"}}>
                    <Link to="/groceries/new" className="ui button primary">
                        Add Groceries
                    </Link>
                </div>
            );
        }
    }

    render () {
        return (
            <div> 
                <h2> Groceries</h2>
                <div className="ui celled list"> {this.renderList()} </div>
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

export default connect(mapStateToProps, { fetchProducs }) (ProductList);