import React from 'react';
import Review from './Review';
import '../../../css/Reviews.css';

export default class Reviews extends React.Component {
  render() {
    let classNames = ['hotel-reviews','clearfix'];
    if(this.props.reviews.length > 0){
      classNames.push('active')
    }
    return (
        <div className={classNames.join(' ')}>
          <ul className="reviews">
            {this.props.reviews.map( (review, index) => {
              return (
                  <li key={index}>
                    <Review review={review}/>
                  </li>
                )
            })}
          </ul>
        </div>
    );
  }
}

Reviews.propTypes = {
  reviews: React.PropTypes.array.isRequired
}

Reviews.defaultProps = {  
  reviews: []
}