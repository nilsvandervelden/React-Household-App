import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchGroceries, editGroceries } from '../../actions';
import GroceriesForm from './GroceriesForm';

class GroceriesEdit extends React.Component {
    componentDidMount() {
        this.props.fetchGroceries(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.editGroceries(this.props.match.params.id, formValues);
    };

    render () {
        if (!this.props.groceries) {
            return <div> Loading... </div>
        }
        return (
            <div>
                <h3> Edit Groceries </h3>
                <GroceriesForm
                    initailValues={_.pick(this.props.groceries, 'title', 'description')}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { groceries: state.groceries[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchGroceries, editGroceries})(GroceriesEdit);