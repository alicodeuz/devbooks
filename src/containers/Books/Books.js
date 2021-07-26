import React, { useEffect, useState } from 'react';
import BookItem from './BookItem';
import Axios from '../../utils/axios';
import { useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import StyledBooksPage from './style';
import PropTypes from 'prop-types';


const Books = React.forwardRef((props, ref) => {
  console.log('I am book.js')
  const [books, setBooks] = useState([]);
  const loc = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  console.log('Location', loc);
  console.log('History', history);
  console.log('MAtch', match);

  const fetchBooks = async () => {
    try {
      const { data } = await Axios('/books');
      if (data.success) {
        setBooks(data.payload.docs);
      }
    } catch (error) {
      console.log(error);
      // Should not work
      throw new Error('It will not work here either')
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <StyledBooksPage ref={ref}>
      <div className="row gy-5 my-5">
        {
          books.map(item => (
            <BookItem
              key={item._id}
              id={item._id}
              title={item.title}
              imageLink={item.imageLink}
            />
          )
          )}
      </div>
    </StyledBooksPage>
  )
})

Books.propTypes = {
  ref: PropTypes.objectOf(PropTypes.element),
  props: PropTypes.any
}
export default Books;