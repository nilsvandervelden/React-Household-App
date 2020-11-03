import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';

class RecipeForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    
    renderIngredients = ({ fields }) => (
        <ul>
            <button className="ui button positive" type="button" onClick={() => fields.push({})}>
                Add Ingredient
            </button>
            {fields.map((ingredient, index) => ( 
                <li key={index}>
                    <Field  
                        name={`${ingredient}${index}`}
                        component={this.renderInput}
                        label={`Ingredient #${index + 1}`}
                    />
                </li>
            ))}
        </ul>
    );

    renderSteps = ({ fields }) => (
        <ul>
            <button className="ui button positive" type="button" onClick={() => fields.push({})}>
                Add Preperation Step
            </button>
            {fields.map((step, index) => (
                <li key={index}>
                    <Field
                        name={`${step}${index}`}
                        component={this.renderInput}
                        label={`Step #${index + 1}`}
                    />
                </li>
            ))}
        </ul>
    );

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.toched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
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
                    label="Enter Recipe Name" 
                />
                <Field
                    name="people"
                    component={this.renderInput}
                    label="Enter Amount of People"
                />
                <Field
                    name="time"
                    component={this.renderInput}
                    label="Enter Amount of Time"
                />
                <Field
                    name="price"
                    component={this.renderInput}
                    label="Enter the Price"
                />
                <Field
                    name="description"
                    component={this.renderInput}
                    label="Enter a Description"
                />
                <FieldArray 
                    name="ingredients" 
                    component={this.renderIngredients} 
                />
                <FieldArray 
                    name="step" 
                    component={this.renderSteps} 
                />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = "You must enter a title";
    }
    if (!formValues.people) {
        errors.people = "You must enter the amount op people";
    }
    if (!formValues.time) {
        errors.time = "You must enter the amount of time";
    }
    if (!formValues.price) {
        errors.price = "You must enter the price";
    }
    if (!formValues.description) {
        errors.description = "You must enter a description";
    }
    return errors;
};

export default reduxForm({
    form: 'recipeForm',
    validate
})(RecipeForm)
