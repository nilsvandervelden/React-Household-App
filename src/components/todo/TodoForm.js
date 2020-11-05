import React from 'react';
import { Field, reduxForm } from 'redux-form';


class TodoForm extends React.Component {
    renderError({ error, touched }) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, type, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} type={type} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
            <Field 
                name="title"
                component={this.renderInput}
                label="Enter title"
            />
            <Field 
                name="description"
                component={this.renderInput}
                label="Enter description"
            />
            <Field 
                name="date"
                type="date"
                component={this.renderInput}
                label="Enter date"
            />
            <div className="ui grid">
                <label className="two wide column">Priority:</label>
                <div className="two wide column">
                    <label><Field name="priority" component={this.renderInput} type="radio" value="high"/>High</label>
                 </div>
                 <div className="two wide column">
                    <label><Field name="priority" component={this.renderInput} type="radio" value="low"/>Low</label>
                 </div>
            </div>
            <button className="ui button primary">Submit</button>
            </form>
        );      
    }
}

const validate = formValues => {
    const errors = {};
    
    if(!formValues.title) {
        errors.title = 'You must enter a title';
    }
    if(!formValues.description) {
        errors.description = 'You must enter a description';
    }
    if(!formValues.date) {
        errors.date = 'You must enter a date'
    }
    return errors;
};

export default reduxForm({
    form: 'todoForm',
    validate
})(TodoForm);


