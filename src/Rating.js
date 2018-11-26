import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = props => {
  let stars = [];
  const { rating } = props;
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<FontAwesomeIcon className="checked" icon={faStar} />);
    } else {
      stars.push(<FontAwesomeIcon icon={faStar} />);
    }
  }
  return <span title={`This book has ${rating} stars`}>{stars}</span>;
};

export default Rating;
