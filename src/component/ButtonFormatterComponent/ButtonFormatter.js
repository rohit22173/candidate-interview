
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Custom Formatter component
export default class ButtonFormatter extends React.Component {
  static propTypes = {
    value: PropTypes.number.isRequired
  };

  render() {
    return (
      <div className="buttonFormatter">
      <button className="">{this.props.value}</button>
      </div>);
  }
}