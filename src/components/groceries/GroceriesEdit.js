import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchGroceries, editGroceries } from '../../actions';
import GroceriesForm from './GroceriesForm';
import { formValues } from 'redux-form';

class GroceriesEdit extends React.Component {
    componentDidMount() {
        this.props.fetchGroceries(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.editGroceries(this.props.match.params.id, formValues);
    };
    
}