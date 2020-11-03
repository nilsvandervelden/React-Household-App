import React from 'react';
import { connect } from 'react-redux';
import { createGroceries } from '../../actions';
import GroceriesForm from './GroceriesForm';

class GroceriesCreate extends React.Component {
    onSubmit = formValues => {
        this.props.createGroceries(formValues);
    };

    render() {
        return (
            <div> 
                <h3> Add your Groceries</h3>
                <GroceriesForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createGroceries })(GroceriesCreate);