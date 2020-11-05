import React from 'react';
import { connect } from 'react-redux';
import { fetchTodos, fetchTodo } from '../../actions';
import { Link } from 'react-router-dom';
import '../../stylesheets/Dot.css';


class TodoList extends React.Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    renderAdmin(todo) {
        if (todo.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`todos/edit/${todo.id}`} className="ui button positive">
                        Edit
                    </Link>
                    <Link to={`todos/delete/${todo.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
            );
        }
    }

    renderList() {
        return this.props.todos.map(todo => {
            return(
                <div className="item" key={todo.id}>
                    <div className="ui grid">
                        <div className="one wide column">
                            <span className="dot"></span>
                        </div>
                        <div className="six wide column">
                            <div className="title">
                                {`Todo: ${todo.title}`}
                            </div>
                            <div className="description">
                                {`Description: ${todo.description}`}
                            </div>
                        </div>
                        <div className="four wide column">
                            <div className="date">
                                <i className="calendar check outline icon"></i>
                                {todo.date}
                            </div>
                        </div> 
                        <div className="four wide column">
                            {this.renderAdmin(todo)}
                        </div>
                    </div>
                </div>
            );
        });
    }
 

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{textAlign: "right"}}>
                    <Link to="/todos/new" className="ui button primary">
                        Create Todo
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div className="banner">
                </div>
                <h2> Todos </h2>
                <div className="ui celled list"> {this.renderList()} </div>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: Object.values(state.todos),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(
    mapStateToProps,
    { fetchTodos, fetchTodo }
  )(TodoList);