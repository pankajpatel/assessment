import React, { Component } from 'react';
import Hotel from './Hotel';

export default class Hotels extends Component {  	
  	render() {
		return (
		    <div className="hotels">
		    	<div className="container">
		          {
		          	this.props.hotels.map((hotel, index)=>{
		          		return (
		          				<Hotel key={index} index={index} hotel={hotel} />
		          			);
		          	})
		          }
		      	</div>
		    </div>		
		);
  	}
}

Hotels.propTypes = {
	hotels: React.PropTypes.array.isRequired,
	reviewLoader: React.PropTypes.func.isRequired
}

Hotels.defaultProps = {	
	hotels: [],
	reviewLoader: function () {
		console.log('No Hotel Loader Found')
	}
}