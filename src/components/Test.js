import * as React from 'react';
import { connect } from 'react-redux';

import * as Loader from 'react-loader';

import { sampleAction } from '../actions';

class Test extends React.Component {
  componentWillMount() {
    this.props.onSampleAction('Valery');
  }

  render() {
    if (this.props.isLoading) {
      return (<Loader loaded={false} />);
    }

    return (
      <div>
        {this.props.error
          ? `Oups... something went wrong, error: ${this.props.error}`
          : JSON.stringify(this.props.data)
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state.example };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSampleAction: (name) => {
      dispatch(sampleAction(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);