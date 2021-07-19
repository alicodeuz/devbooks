import React, { useEffect, useState } from 'react';
import BookItem from './BookItem';
import Axios from '../../utils/axios';
import StyledBooksPage from './style';

const BOOKS = [
  { _id: 1, title: 'You can not touch this', imageLink: '' },
  { _id: 2, title: 'You can touch this', imageLink: '' },
  { _id: 3, title: 'You may touch this', imageLink: '' },
];

export default function Books(props) {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    try {
      const { data } = await Axios('/books');
      if (data.success) {
        setBooks(data.payload.docs);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <StyledBooksPage>
      <h2>Books</h2>
      <div className="row gy-5">
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
