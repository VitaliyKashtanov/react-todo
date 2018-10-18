import React from 'react';

import Button from './Button';

import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';


class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }


  handleSubmit = (event) => {
    event.preventDefault();
    let title = this.refs.title.value;

    this.props.onEdit(this.props.id, title);
    this.setState({ editing: false });
  }

  renderDisplay() {
    
    return (
      <div className={`todo${this.props.completed ? ' completed' : ''}`}>
        <Grid container>
          <Grid item xs={1}>
            <Checkbox color="secondary" checked={this.props.completed} onChange={() => this.props.onToggle(this.props.id)} style={{padding:0}} />
          </Grid>
          <Grid item xs={9}>
            <span className="todo-title">{this.props.title}</span>
          </Grid>
          <Grid item xs={2}>
            <Grid container>
              <Grid item xs={6}>
                <Button className="edit icon" icon="edit" onClick={() => this.setState({ editing: true })} />
              </Grid>
              <Grid item xs={6}>
                <Button className="delete icon" icon="delete" onClick={() => this.props.onDelete(this.props.id)} />
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
            <input className="edit-input" type="text" ref="title" defaultValue={this.props.title} />
          </Grid>
          <Grid item xs={2}>
           <Button className="save icon" icon="save" type="submit" />
          </Grid>
        </Grid>        
      </form>
    );
  }

  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }

}

export default Todo;
