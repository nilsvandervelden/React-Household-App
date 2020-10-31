import React from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../../actions';
import { Link } from 'react-router-dom';

class TodoList extends React.Component {
    componentDidMount() {
        this.props.fetchTodos();
  }

    renderAdmin(todo) {
        if (todo.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                
        
                </div>
            )
        }
    }
}

const TodoList = () => {
    return <div>TodoList</div>;
};

export default TodoList;