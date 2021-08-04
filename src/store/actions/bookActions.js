import * as actionTypes from '../actionTypes';
import axios from '../../utils/axios';

const fetchMyBooksStarted = () => {
  return {
    type: actionTypes.FETCH_MY_BOOKS_STARTED
  }
};

const fetchMyBooksSuccess = (payload) => {
  return {
    payload,
    type: actionTypes.FETCH_MY_BOOKS_SUCCESS,
  }
};

const fetchMyBooksError = (error) => {
  return {
    type: actionTypes.FETCH_MY_BOOKS_ERROR,
    payload: error,
  }
};

export const fetchMyBooksAction = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchMyBooksStarted());
      const { data } = await axios.get('/books/my-books');
      dispatch(fetchMyBooksSuccess(data.payload));
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
      dispatch(fetchMyBooksError(error.message))
    }
  }
}