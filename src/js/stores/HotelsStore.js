import qwest from 'qwest';
import {EventEmitter} from 'events';
import Dispatcher from '../dispatchers/AppDispatcher';
import Constants from '../constants/AppConstants';

const ActionTypes = Constants.ActionTypes;

let _hotels = [];
let _error = null;

const CHANGE_EVENT = 'change';

let Store = Object.assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getHotels: function(){
  	if( _error ){
  		return null;
  	} else {
  		return _hotels;
  	}
  },
  getReviews: function(index, callback){
  	if( _hotels[index].reviews === undefined ){
	  	qwest
	  		.get('//fake-hotel-api.herokuapp.com/api/reviews?hotel_id='+_hotels[index].id)
	  		.then( response => {
	  			if(response.responseText.length > 0){
	  				_hotels[index].reviews = JSON.parse(response.responseText)
  					_hotels[index].reviewsOpen = !_hotels[index].reviewsOpen;
  					_hotels[index].reviewsLoading = false;
	  				callback()
	  			}
	  		})
	  		.catch(err=>{
	  			_error = err;
	  			callback();
	  		})
  	} else {
  		_hotels[index].reviewsOpen = !_hotels[index].reviewsOpen;
		callback()
  	}
  },
  getRemoteHotels: function(callback){
  	_error = null;
  	_hotels = [];
  	qwest
  		.get('http://fake-hotel-api.herokuapp.com/api/hotels?count=10')
  		.then( response => {
  			if(response.responseText.length > 0){
  				_hotels = JSON.parse(response.responseText)
  				callback()
  			}
  		})
  		.catch(err=>{
  			_error = err;
  			callback();
  		})
  }
});

Store.dispatchToken = Dispatcher.register( (action) => {
  console.log( action)
  switch(action.type) {

    case ActionTypes.LOADED: {
      Store.getRemoteHotels(()=>{
      	Store.emitChange();
      })
      break;
    }
    case ActionTypes.HOTEL_CLICKED: {
      Store.getReviews( action.index, ()=>{
      	Store.emitChange();
      })
      break;
    }

    default:
      // do nothing
  }

});

export default Store;