import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron } from 'reactstrap';

export class HelloWorld extends React.Component {

  static propTypes = {
    message: PropTypes.string,
  };

  render() {
    return <Jumbotron>
      <h1>Hello World! {this.props.message}</h1>
    </Jumbotron>;
  }

}