import { connect } from 'react-redux';

import List from '../components/List';
import {
  deleteTodo,
  toggleTodo,
  editTodoInBase,
  getTasks,
} from '../actions';


function mapStateToProps(state) {
  return {
    todos: state
  };
}

function mapDispatchToProps(dispatch) {
  dispatch(getTasks());
  return {
    onDelete: id => dispatch(deleteTodo(id)),
    onToggle: id => dispatch(toggleTodo(id)),
    onEdit: (id, task) => dispatch(editTodoInBase(id, task))
  };
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;