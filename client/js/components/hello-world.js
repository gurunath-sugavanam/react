import React from 'react';
import PropTypes from 'prop-types';

export class HelloWorld extends React.Component {

  static propTypes = {
    message: PropTypes.string,
  };

  render() {
    return <h1>Hello World! {this.props.message}</h1>;
  }

}