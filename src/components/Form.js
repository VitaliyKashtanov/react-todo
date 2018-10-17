import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';


class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };

    this.store = this.props.store;

  }
 
  handleSubmit = (event) => {
    event.preventDefault();
    let title = this.state.title;

    if (title) {
      this.props.onAdd(title);
      this.setState({ title: '' });
    }
  }

  handleChange = (event) => {
    let title = event.target.value;

    this.setState({ title });
  }

  render() {
    return <form className="todo-form" onSubmit={this.handleSubmit}>
        <Grid container justify="flex-end">
          <Grid item xs={10}>
            <Input type="text" value={this.state.title} placeholder="Что нужно сделать?" onChange={this.handleChange} fullWidth={true}  />
          </Grid>
          <Grid item xs={2}>
            <Button type="submit">Добавить</Button>
          </Grid>
        </Grid>
      </form>;
  }

}

export default Form;