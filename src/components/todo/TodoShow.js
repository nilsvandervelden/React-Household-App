import React from 'react';
import { connect } from 'react-redux';
import { fetchTodo } from '../../actions';

class TodoShow extends React.Component{

    componentDidMount() {
        this.props.fetchTodo(this.props.match.params.id);
    }

    render () {
        if(!this.props.todo) {
            return <div>Loading...</div>
        }

        const { title, description } = this.props.todo;

        return (
            <div>
                <h1> {title} </h1>
                <h5> {description} </h5>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { todo: state.todos[ownProps.match.params.id]};
};

export default connect(mapStateToProps, { fetchTodo})(TodoShow);
