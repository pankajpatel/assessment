import React from 'react';

export default class Error extends React.Component {
  render() {
    return (
      	<div className="error">
          {this.props.children}
      	</div>
    );
  }
}
