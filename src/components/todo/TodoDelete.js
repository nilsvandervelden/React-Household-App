import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTodo, deleteTodo } from '../../actions';

class TodoDelete extends React.Component {
    componentDidMount() {
        this.props.fetchTodo(this.props.match.params.id);
    }

    renderActions() {
        const id = this.props.match.params.id;
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteTodo(id)} className="ui button negative">Delete</button>
                <Link to="/todos" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if(!this.props.todo) {
            return 'Are you sure you want to delte this todo?'
        }
        return `Are you sure you want to delte the todo with title: ${this.props.todo.title}`
    }

    render() {
        return(
            <Modal
                title="Delete Todo"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { todo: state.todos[ownProps.match.params.id]}
};

export default connect(mapStateToProps, { fetchTodo, deleteTodo })(TodoDelete);