import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import { StyledButton, StyledInput } from '../../style/UI';
import { getValidInputData } from '../../utils';
import Axios from '../../utils/axios';

const initialState = {
  firstName: '',
  lastName: '',
  date_of_birth: null,
  date_of_death: null,
  isDead: false,
};

export default function AddAuthor() {
  const history = useHistory();
  const [state, setState] = useState(initialState);

  const handleInputChange = e => {
    const { value, name, checked } = e.target;
    setState(author => ({
      ...author,
      [name]: name === 'isDead' ? checked : value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSubmit = getValidInputData(state, ['isDead']);
      const { data } = await Axios.post('/authors', formDataToSubmit);
      console.log(data)
      Swal.fire({
        title: 'Success',
        text: 'Author has been added successfully',
        icon: 'success',
        showCancelButton: true,
        cancelButtonText: 'Finished adding',
        confirmButtonText: 'Add more',
      }).then(({ value }) => {
        if (!value) {
          history.replace('/authors');
        }
        setState(initialState);
      });
    } catch (error) {
      console.log(error.response);
      Swal.fire({
        title: 'Error',
        text: error.message,
        icon: 'error'
      })
    }
  };

  return (
    <div className="my-5">
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="form__input-wrapper">
          <StyledInput
            type="text"
            className="w-100"
            name="firstName"
            value={state.firstName}
            onChange={handleInputChange}
            placeholder="First name"
          />
        </div>
        <div className="form__input-wrapper">
          <StyledInput
            type="text"
            className="w-100"
            name="lastName"
            value={state.lastName}
            onChange={handleInputChange}
            placeholder="Last name"
          />
        </div>
        <div className="form__input-wrapper">
          <StyledInput
            type="date"
            className="w-100"
            name="date_of_birth"
            value={state.date_of_birth}
            onChange={handleInputChange}
            placeholder="Date of birth"
          />
          <div className="m-n1">
            <input
              type="checkbox"
              name="isDead"
              value={state.isDead}
              onChange={handleInputChange}
            />
            <label htmlFor="" className="ms-1">Author is not active</label>
          </div>
        </div>
        {
          state.isDead &&
          (<div className="form__input-wrapper">
            <StyledInput
              type="date"
              className="w-100"
              name="date_of_death"
              value={state.date_of_death}
              onChange={handleInputChange}
              placeholder="Date of death"
            />
          </div>)
        }

        <div className="form__input-wrapper justify-center d-flex">
          <StyledButton
            className="main w-100"
            type="submit"
            size="lg"
          >
            Create Author
          </StyledButton>
        </div>
      </form>
    </div>
  )
}
