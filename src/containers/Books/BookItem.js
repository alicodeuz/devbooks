import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledBookItem } from './style';
import constants from '../../constants';

export default function BookItem({ title, id, imageLink }) {
  const history = useHistory();
  return (
    <StyledBookItem className="col-md-3" onClick={() => history.push(`/books/${id}`)} style={{ maxWidth: 250 }}>
      <div className="card">
        <img
          alt={title}
          className="card-img-top"
          src={imageLink || constants.DEFAULT_BOOK_IMAGE}
          onError={e => e.target.src = constants.DEFAULT_BOOK_IMAGE}
        />
        <div className="card-body">
          <h5 className="card-title">{title.length > 20 ? title.slice(0, 17) + '...' : title}</h5>
        </div>
      </div>
    </StyledBookItem>
  );
}

BookItem.defaultProps = {
  imageLink: constants.DEFAULT_BOOK_IMAGE
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  imageLink: PropTypes.string
};