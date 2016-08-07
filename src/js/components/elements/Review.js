import React from 'react';

export default class Review extends React.Component {
  render() {
    return (
        <div className="review clearfix">
          <div className="review-emotion">
            <span className={this.props.review.positive ? 'positive' : 'negative'}></span>
          </div>
          <div className="review-content">
            <h3>{this.props.review.name}</h3>
            <p>{this.props.review.comment}</p>
          </div>
        </div>
    );
  }
}

Review.propTypes = {
  review: React.PropTypes.object.isRequired
}

Review.defaultProps = {  
  review: []
}