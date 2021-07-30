import React, { useEffect, useState } from 'react';
import BookItem from './BookItem';
import Axios from '../../utils/axios';
import { Link } from 'react-router-dom';
import StyledBooksPage from './style';
import PropTypes from 'prop-types';
import { AiOutlinePlus } from 'react-icons/ai';


const Books = React.forwardRef((props, ref) => {
  const [books, setBooks] = useState([]);

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

      {
        !books.length ?
          <div className="p-5 container bg-light my-5 text-center">
            <h2 className="display-6">Ad your first book</h2>
            <Link to="/books/new" className="btn btn-primary">
              <AiOutlinePlus />
              Add
            </Link>
          </div>
          :
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
      }
    </StyledBooksPage>
  )
})

Books.propTypes = {
  ref: PropTypes.objectOf(PropTypes.element),
  props: PropTypes.any
}
export default Books;