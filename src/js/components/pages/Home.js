import React from 'react';
import Button from '../elements/Button';
import Hotels from '../elements/Hotels';
import Error from '../elements/Error';
import HotelsStore from '../../stores/HotelsStore';
import ActionCreators from '../../actions/ActionCreators';

export default class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			hotels: HotelsStore.getHotels(),
			loading: false
		}
		this._loadHotels = this._loadHotels.bind(this)
		this._onChange = this._onChange.bind(this)
		this.checkErrors = this.checkErrors.bind(this)
	}
	_loadHotels(){
		this.setState({loading: true})
		ActionCreators.loadHotels();
	}	
	_onChange(){
		let hotels = HotelsStore.getHotels();
		this.setState({loading: false, hotels});
	}
	componentDidMount() {
    	HotelsStore.addChangeListener(this._onChange);
	}
	componentWillUnmount() {
    	HotelsStore.removeChangeListener(this._onChange);
	}
	checkErrors(){
		console.log( this.state.hotels )
		if( this.state.hotels === null ){
			return <Error>Something went wrong! Please try again after some time</Error>;
		} else {
		    return <Hotels hotels={this.state.hotels} />;
			
		}
	}
  	render() {
	    return (
	        <div className="container home">
	        	<div className="text-center">
		          <Button className="button button-green" onClick={this._loadHotels}>{this.state.loading ? 'Loading...': 'Load Hotels'}</Button>
		        </div>
		        <section>
		        	{this.checkErrors()}
		        </section>
	        </div>
	    );
  	}
}