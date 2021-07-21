import React, { useEffect, useState } from 'react';
import BookItem from './BookItem';
import Axios from '../../utils/axios';
import StyledBooksPage from './style';


export default function Books(props) {
  console.log('I am book.js')
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
    <StyledBooksPage>
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
}
