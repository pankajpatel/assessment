import React from 'react';
import moment from 'moment';
import Button from '../elements/Button';
import Reviews from '../elements/Reviews';
import ActionCreators from '../../actions/ActionCreators';
import '../../../css/Hotel.css';

export default class Hotel extends React.Component {
	constructor(props){
		super(props)
		this._onReviewClick = this._onReviewClick.bind(this)
		this.getDate = this.getDate.bind(this)
		this.getButtonText = this.getButtonText.bind(this)
	}
	getButtonText(){
		return this.props.hotel.reviewsOpen ? this.props.hotel.reviewsLoading ? 'Loading...' : 'Hide Reviews' : 'Show Reviews';
	}
	_onReviewClick(){
		ActionCreators.toggleReviews(this.props.index);
	}
	getDate(dateString){
		return moment(dateString).locale('de').format("DD.MM.YYYY");
	}
	getReviews(){
		if( this.props.hotel.reviewsOpen ){
			return <Reviews reviews={this.props.hotel.reviews} />
		} else {
			return <Reviews reviews={[]} />
		}
	}
	render() {
		return (
				<article className="hotel clearfix">
					<div className="artwork" style={{backgroundImage: 'url('+this.props.hotel.images[0]+')'}} data-backgrounded>
						<img src={this.props.hotel.images[0]} className="image" alt={this.props.hotel.name} />
					</div>
					<div className="details ">
						<div className="head clearfix">
							<div className="pull-left">
								<h2>{this.props.hotel.name}</h2>
								<p>{this.props.hotel.city} - {this.props.hotel.country}</p>
							</div>
							<div className="pull-right">
								<div className="rating">
									{ [0,0,0,0,0].map( 
										(i, index) => {
											if( index < Math.round(this.props.hotel.stars) ){
												return (<span key={index} className='star active'>&#9733;</span>)
											} else {
												return (<span key={index} className='star'>&#9733;</span>)
											}
										})
									}
								</div>
							</div>
						</div>
						<div className="description">
							<p>{this.props.hotel.description}</p>
						</div>
						<div className="insights clearfix">
							<div className="pull-left">
								<Button className="button button-blue" onClick={this._onReviewClick} >{this.getButtonText()}</Button>
							</div>
							<div className="pull-right">
								<p className="cost clearfix"><span>{this.props.hotel.price} €</span></p>
								<p><small>{this.getDate(this.props.hotel.date_start)} - {this.getDate(this.props.hotel.date_end)}</small></p>
							</div>
						</div>
					</div>
					{
						this.getReviews()
					}
				</article>
		);
	}
}

Hotel.propTypes = {
	hotel: React.PropTypes.object.isRequired
}

Hotel.defaultProps = {	
	hotel: {}
}