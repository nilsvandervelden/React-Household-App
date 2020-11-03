import React from 'react';
import { connect } from 'react-redux'; 
import { fetchAllGroceries } from '../../actions';
import { Link } from 'react-router-dom';

class GroceriesList extends React.Component {
    componentDidMount(){
        this.props.fetchAllGroceries();
    }

    renderAdmin(groceries) {
        if (groceries.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`groceries/edit/${groceries.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`groceries/delete/${groceries.id}`}className="ui button negative">
                        Delete
                    </Link>
                </div>
            );
        }
    }

    renderList () {
        return this.props.groceries.map(groceries => {
            return (
                <div className="item" key={groceries.id}>
                    {this.renderAdmin(groceries)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/groceries/${groceries.id}`} className="header">
                            {groceries.title}
                        </Link>
                        <div className="description">{groceries.description}</div>
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
        groceries: Object.values(state.groceries),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchAllGroceries }) (GroceriesList);