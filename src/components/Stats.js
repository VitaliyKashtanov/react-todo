import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

function Stats(props) {
  let total = props.todos.length;
  let completed = props.todos.filter(todo => todo.completed).length;
  let notCompleted = total - completed;

  return (
    <List >
      <ListItem>
        <div>Всего задач: {total}</div>
      </ListItem>
      <ListItem>
        <div>Выполнено: {completed}</div>
      </ListItem>
      <ListItem>
        <div>Осталось: {notCompleted}</div>
      </ListItem>
    </List>
  );
}

export default Stats;