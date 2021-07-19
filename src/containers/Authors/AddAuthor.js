import React, { useState } from 'react'
import Axios from '../../utils/axios';

export default function AddAuthor() {
  const [author, setAuthor] = useState({
    firstName: '',
    lastName: ''
  });

  const handleInputChange = e => {
    const { value, name } = e.target;
    setAuthor(author => ({
      ...author,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/authors', author);
      console.log(data)
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input
            type="text"
            name="firstName"
            value={author.firstName}
            className="form-control"
            onChange={handleInputChange}
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input
            type="text"
            name="lastName"
            value={author.lastName}
            className="form-control"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
