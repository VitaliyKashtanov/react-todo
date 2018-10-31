import { connect } from 'react-redux';
import ListOfTodos from '../components/ListOfTodos';
import {
  deleteTodo,
  toggleTodo,
  editTodoInFirebase,
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
    onEdit: (todo) => dispatch(editTodoInFirebase(todo))
  };
}

const ListOfTodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListOfTodos);

export default ListOfTodosContainer;