import { DELETE_TODO, TOGGLE_TODO, EDIT_TODO, RENDER_TASKS } from '../actions';

export default function reducer(state = [], action) {
  switch (action.type) {

    case RENDER_TASKS:
      return action.tasks;

    case TOGGLE_TODO:
      state.forEach(todo => {
        if(todo.id === action.id){
          todo.completed = !todo.completed;
        }
      });
      return [...state];

    case EDIT_TODO:
      if (state.id === action.id) {
        state.title = action.title;
      }
      return [...state];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    default:
      return state;
  }
}