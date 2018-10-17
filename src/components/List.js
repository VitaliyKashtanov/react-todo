import React from 'react';

import Todo from './Todo';

function List(props) {

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

export default List;