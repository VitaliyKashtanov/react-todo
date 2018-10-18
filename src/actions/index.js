import * as firebase from 'firebase';
import uuid from 'uuid/v4';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const SET_TASKS = 'SET_TASKS';

export function addTodo(task) {

  return {
    type: ADD_TODO,
    task,
  };
}
export function addTask(task) {
  return dispatch => {
    const id = uuid();
    firebase
      .database()
      .ref(`todos/${id}`)
      .set({ task, id })
      .then(() => dispatch(getTasks()));
  };
}

export function setTasks(tasks) {
  return {
    type: SET_TASKS,
    tasks,
  };
}

export function deleteTodo(id) {
  firebase
    .database()
    .ref(`todos/${id}`)
    .remove();
  return {
    type: DELETE_TODO,
    id,
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

export function editTodoInBase(id, task) {
  return dispatch => {
    firebase
      .database()
      .ref(`todos/${id}`)
      .update({ task })
      .then(() => dispatch(getTasks()));
  }
}

export function editTodo(id, title) {
  return {
    type: EDIT_TODO,
    id,
    title,
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
      .then(() => dispatch(setTasks(tasks)));
  };
}