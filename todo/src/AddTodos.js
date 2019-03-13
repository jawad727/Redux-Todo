import React from 'react';

import { connect } from "react-redux";
import { addTodo } from './actions';

class AddTodos extends React.Component {
    state = {
        newTodo: ''
    }

    handleChanges = e => {
        this.setState({
            newTodo: e.target.value
        })
    }

    addTodo = e => {
        // console.log(this.props.addTodo(this.state.newTodo))
        e.preventDefault();
        this.props.addTodo(this.state.newTodo)
    }

render() {

    return (

        <div>

        <p>words</p>

        <form onSubmit={this.addTodo}> 
        <input
            type="text"
            value={this.state.newTodo}
            placeholder="add a todo"
            onChange={this.handleChanges} />
            <button>Add Todo</button>
        </form>
            

        {this.props.todos.map((item, index) => (

            

            <p key={index}> 

                {item.todo} 

            </p>



        ))}

            

        </div>

    )
}

};



const mapStateToProps = state => ({
    todos: state.todos
  });
  
  export default connect(
    mapStateToProps,
    {addTodo}
  )(AddTodos);