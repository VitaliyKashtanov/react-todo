import { connect } from 'react-redux';
import Form from '../components/Form';
import { addTask } from '../actions';

function mapDispatchToProps(dispatch) {
  return { onTodoAdd: (task) => dispatch(addTask(task)) };
}

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;