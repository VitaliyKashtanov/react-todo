import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO, SET_TASKS } from '../actions';

import { combineReducers } from 'redux';

function todoReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        title: action.task,
        completed: false,
      };

    case SET_TASKS:
      return {
        id: action.id,
        title: action.task,
      };

    case TOGGLE_TODO:
      if (state.id === action.id) {
        state.completed = !state.completed;
      }
      return state;

    case EDIT_TODO:
      if (state.id === action.id) {
        state.title = action.title;
      }
      return state;
  }
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todoReducer(undefined, action)];

    case SET_TASKS:
      return action.tasks;

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case TOGGLE_TODO:
      return state.map(todo => todoReducer(todo, action));

    case EDIT_TODO:
      return state.map(todo => todoReducer(todo, action));

    default:
      return state;
  }
}

export const reducers = combineReducers({
  todos: todoReducer,
});




















































// const initialState = {
//   isLoading: false,
//   isLoaded: false,
//   data: null,
//   error: null,
// };

// const exampleReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SAMPLE_REQUEST:
//       return Object.assign({}, state, {
//         isLoading: true,
//         isLoaded: false,
//         data: null,
//         error: null,
//       });

//     case SAMPLE_RESPONSE:
//       return Object.assign({}, state, {
//         isLoading: false,
//         isLoaded: true,
//         data: action.payload,
//         error: null,
//       });

//     case SAMPLE_ERROR_RESPONSE:
//       return Object.assign({}, state, {
//         isLoading: false,
//         isLoaded: false,
//         data: {},
//         error: action.payload,
//       });
//     default:
//       return state;
//   }
// };