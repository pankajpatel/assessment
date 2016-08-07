import Constants from '../constants/AppConstants';
import Dispatcher from '../dispatchers/AppDispatcher';

const ActionTypes = Constants.ActionTypes;

export default {

  loadHotels: () => {
    Dispatcher.dispatch({
      type: ActionTypes.LOADED
    })
  },

  toggleReviews: (index) => {
    Dispatcher.dispatch({
      type: ActionTypes.HOTEL_CLICKED,
      index: index
    })
  }

};
