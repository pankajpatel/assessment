import React from 'react';
import '../../../css/Button.css';

export default class Button extends React.Component {
  render() {
    return (
        <button className={this.props.className || 'button'} onClick={this.props.onClick}  type={this.props.type || 'button' }>
          {this.props.children}
        </button>
    );
  }
}

Button.defaultProps = {
	onClick: function () {
		console.log('No OnClick Supplied')
	}
}