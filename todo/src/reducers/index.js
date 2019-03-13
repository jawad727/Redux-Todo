import {ADD_TODO} from '../actions/'

const initialState = {
    todos : [ {todo: 'eat', completed: false}, {todo: 'sleep', completed: false},
     {todo: 'work', completed: false}
    ]
}

function addTodo(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: 
        return {...state,
             todos: [...state.todos, {todo: action.payload, completed:false}]}

        default:
        return state;
    }
}

export default addTodo