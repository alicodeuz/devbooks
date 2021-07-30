import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import InputErrorMessages from '../../components/InputErrorMessages';
import { StyledButton, StyledInput } from '../../style/UI';
import { handleErrorObject } from '../../utils';
import Axios from '../../utils/axios';
import { getValidInputData } from '../../utils';
import { useRef } from 'react';

export default function AddBook() {
  const [errors, setErrors] = useState({});
  const [authors, setAuthors] = useState([]);
  const fileRef = useRef();
  const coverImageRef = useRef();
  const [state, setState] = useState({
    title: '',
    author: '',
    imageLink: '',
    link: '',
    description: '',
    price: null,
    pages: null,
    country: '',
    language: '',
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await Axios('/authors');
        console.log(data);
        setAuthors(data.payload);
      } catch (error) {
        console.log(error)
      }
    })()
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setState(state => ({ ...state, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { link, imageLink, ...restData } = state;
      const formDataToSubmit = getValidInputData(restData);

      const formData = new FormData();
      for (let x in formDataToSubmit) {
        formData.append(x, formDataToSubmit[x]); // {name: '12'}
      }

      if (fileRef.current.files[0]) {
        formData.append('link', fileRef.current.files[0])
      }

      if (coverImageRef.current.files[0]) {
        formData.append('image', coverImageRef.current.files[0])
      }

      const { data } = await Axios.post('/books', formData);
      console.log(data)
    } catch (error) {
      const errorData = error.response.data;
      const errorResponse = errorData?.msg ? errorData?.msg : errorData;
      console.log(error.response)
      const msg = handleErrorObject(errorResponse);
      setErrors(msg);
    }
  };

  console.log(errors)

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="form__input-wrapper">
          <label htmlFor="">Book title</label>
          <InputErrorMessages type="title" errorObj={errors} />
          <StyledInput
            type="text"
            name="title"
            value={state.title}
            onChange={handleInputChange}
            placeholder="Book title"
          />
        </div>
        <div className="form__input-wrapper">
          <label htmlFor="">Book pages</label>
          <InputErrorMessages type="pages" errorObj={errors} />
          <StyledInput
            type="number"
            name="pages"
            value={state.pages}
            onChange={handleInputChange}
            placeholder="Number of pages"
          />
        </div>
        <div className="form__input-wrapper">
          <label htmlFor="">Published year</label>
          <InputErrorMessages type="year" errorObj={errors} />
          <StyledInput
            type="text"
            name="year"
            value={state.year}
            onChange={handleInputChange}
            placeholder="Year"
          />
        </div>
        <div className="form__input-wrapper">
          <label htmlFor="">Country</label>
          <InputErrorMessages type="country" errorObj={errors} />
          <StyledInput
            type="text"
            name="country"
            value={state.country}
            onChange={handleInputChange}
            placeholder="Country of oregin"
          />
        </div>
        <div className="form__input-wrapper">
          <label htmlFor="">Description</label>
          <InputErrorMessages type="description" errorObj={errors} />
          <StyledInput
            type="text"
            name="description"
            value={state.description}
            onChange={handleInputChange}
            placeholder="description of oregin"
          />
        </div>
        <div className="form__input-wrapper">
          <label htmlFor="">Price</label>
          <InputErrorMessages type="price" errorObj={errors} />
          <StyledInput
            type="number"
            name="price"
            value={state.price}
            onChange={handleInputChange}
            placeholder="Price"
          />
        </div>
        <div className="form__input-wrapper">
          <label htmlFor="">Language</label>
          <InputErrorMessages type="language" errorObj={errors} />
          <StyledInput
            type="text"
            name="language"
            value={state.language}
            onChange={handleInputChange}
            placeholder="language"
          />
        </div>
        <div className="form__input-wrapper">
          <label htmlFor="">Author</label>
          <InputErrorMessages type="author" errorObj={errors} />
          <select name="author" value={state.author} onChange={handleInputChange}>
            {
              authors.map(item => {
                const { _id, firstName, lastName } = item;
                return (
                  <option value={_id} key={_id}>{`${firstName} ${lastName}`}</option>
                )
              })
            }
          </select>
        </div>
        <div className="form__input-wrapper">
          <label htmlFor="">Cover image</label>
          <InputErrorMessages type="imageLink" errorObj={errors} />
          <StyledInput
            type="file"
            name="imageLink"
            ref={coverImageRef}
            value={state.imageLink}
            onChange={handleInputChange}
            placeholder="imageLink"
          />
        </div>
        <div className="form__input-wrapper">
          <label htmlFor="">Upload book file</label>
          <InputErrorMessages type="link" errorObj={errors} />
          <StyledInput
            type="file"
            name="link"
            ref={fileRef}
            value={state.link}
            onChange={handleInputChange}
            placeholder="link"
          />
        </div>

        <StyledButton>Create book</StyledButton>
      </form>
    </div>
  )
}
