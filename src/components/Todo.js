import React from 'react';
import PropTypes from 'prop-types';

import CustomButton from './CustomButton';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';


class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      value: props.title
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const todo = {
      task: this.state.value,
      id: this.props.id,
      completed: this.props.completed
    }
    this.props.onEdit(todo);
    
    this.setState({ editing: false });
  };
  
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleEdit = () => {
    this.setState({ editing: true });
  };
  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };
  handleToggle = () => {
    this.props.onToggle(this.props.id);

    const todo = {
      task: this.state.value,
      id: this.props.id,
      completed: !this.props.completed
    }
    this.props.onEdit(todo);
  };

  renderDisplay() {
    return (
      <div className={`todo${this.props.completed ? ' completed' : ''}`}>
        <Grid container>
          <Grid item xs={1}>
            <Checkbox
              color="secondary"
              checked={this.props.completed}
              onChange={this.handleToggle}
            />
          </Grid>
          <Grid item xs={9}>
            <span className="todo-title">{this.props.title}</span>
          </Grid>
          <Grid item xs={2}>
            <Grid container>
              <Grid item xs={6}>
                <CustomButton className="edit icon" icon="edit" onClick={this.handleEdit} />
              </Grid>
              <Grid item xs={6}>
                <CustomButton className="delete icon" icon="delete" onClick={this.handleDelete} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }


  renderForm() {    
    return (
      <form className="todo-edit-form" onSubmit={this.handleSubmit}>
        <Grid container>
          <Grid item xs={10}>
            <input
              className="edit-input"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={2}>
            <CustomButton className="save icon" icon="save" type="submit" />
          </Grid>
        </Grid>
      </form>
    );
  }

  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }
}

Todo.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func
};

export default Todo;
