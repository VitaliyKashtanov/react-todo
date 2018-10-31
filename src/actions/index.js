import * as firebase from 'firebase';

export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const RENDER_TASKS = 'RENDER_TASKS';

export function addTask(task) {
  return dispatch => {
    const id = firebase
      .database()
      .ref(`todos/`)
      .push().key;
    firebase
      .database()
      .ref(`todos/${id}`)
      .set({ task, id, completed: false })
      .then(() => dispatch(getTasks()));
  };
}

export function renderTasks(tasks) {
  return {
    tasks,
    type: RENDER_TASKS,
  };
}

export function deleteTodo(id) {
  firebase
    .database()
    .ref(`todos/${id}`)
    .remove();
  return {
    id,
    type: DELETE_TODO,
  };
}

export function toggleTodo(id) {
  return {
    id,
    type: TOGGLE_TODO,
  };
}

export function editTodoInFirebase(todo) {
  return dispatch => {
    firebase
      .database()
      .ref(`todos/${todo.id}`)
      .update( todo )
      .then(() => dispatch(getTasks()));
  }
}

export function editTodo(id, title) {
  return {
    id,
    title,
    type: EDIT_TODO,
  };
}

export const removeTaskFromFirebase = id => {
  firebase
    .database()
    .ref(`todos/${id}`)
    .remove();
};

export function getTasks() {
  return dispatch => {
    const tasks = [];
    firebase
      .database()
      .ref(`todos/`)
      .once('value', snap => {
        snap.forEach(data => {
          let task = data.val();
          tasks.push(task);
        });
      })
      .then(() => dispatch(renderTasks(tasks)));
  };
}