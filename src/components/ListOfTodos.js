import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

function ListOfTodos(props) {

  return (
    <section className="todo-list">
      {props.todos.map(todo =>
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.task}
          completed={todo.completed}
          onDelete={props.onDelete}
          onToggle={props.onToggle}
          onEdit={props.onEdit}
        />)
      }
    </section>
  );
}

ListOfTodos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ),
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
  onEdit: PropTypes.func,
};

export default ListOfTodos;