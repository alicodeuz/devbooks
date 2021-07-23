import React, { useEffect, useState } from 'react';
import { StyledBookView } from './style';
import Axios from '../../utils/axios';
import { useParams } from 'react-router-dom';

const baseUrl = 'https://book.alitechbot.uz';
const defaultImage = "https://cdn.pixabay.com/photo/2019/09/17/20/47/prague-4484517__480.jpg";

export default function BookView() {
  const [book, setBook] = useState({
    comment: [],
    book: {
      author: {}
    }
  });

  const params = useParams();
  const fetchBook = async () => {
    try {
      const { data } = await Axios(`/books/${params.id}`);
      if (data.success) {
        setBook(data.payload);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBook();
  }, []);

  const { imageLink, title, description, updatedAt } = book.book;

  return (
    <StyledBookView>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imageLink ? baseUrl + imageLink : defaultImage} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">{new Date(updatedAt).toLocaleDateString()}</small></p>
            </div>
          </div>
        </div>
      </div>
    </StyledBookView>
  );
}
