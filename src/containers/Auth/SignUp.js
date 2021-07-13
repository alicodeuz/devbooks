import React, { useCallback, useState, useRef } from 'react';
import { Link, } from 'react-router-dom';
import axios from 'axios';
import { StyledButton, StyledInput } from '../../style/UI';
import StyledSignIn from '../../style/auth';
import columnImage from '../../assets/images/auth/login.svg';
import InputErrorMessages from '../../components/InputErrorMessages';

export default function SignUp(props) {
  const [state, setState] = useState({
    phone: "",
    email: "",
    password: "",
    lastName: "",
    firstName: "",
  });

  const [errors, setErrors] = useState({ type: '', message: '' });

  const emailRef = useRef();
  const [visible, setVisible] = useState(null);

  const handleInputChange = useCallback(e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...state, [name]: value }));
  }, [state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://book.alitechbot.uz/api/sign-up', state);
      console.log(data);
      if (data.success) {
        localStorage.setItem('token', data.token);
      } else {
        console.log('Set error', data)
        const msg = handleErrorObject(data?.msg);
        setErrors(msg);
      }
    }
    catch (err) {
      console.log(err.response)
      const msg = handleErrorObject(err.response?.data?.msg);
      setErrors(msg);
    }
  }
  console.log('My Erors', errors);

  const handleErrorObject = (errorMsg = '') => {
    if (errorMsg.includes('E11000')) {
      return {
        type: 'email',
        message: 'This user exist. Choose another email!'
      }
    }
    const errorType = errorMsg.slice(errorMsg.indexOf('"'), errorMsg.lastIndexOf('"'));
    return {
      type: errorType.replace('\"', '').replace('\\', ''),
      message: errorMsg
    }
  };

  return (
    <StyledSignIn>
      <div className="col-left">
        <img src={columnImage} alt="login page" />
      </div>

      <div className="col-right">
        <h2>Sign Up</h2>
        <p>Do not you have an account? <Link to="/sign-in">Sign in</Link> </p>
        <button onClick={() => setVisible(state => !state)}>
          {visible ? 'Turn off' : 'Turn on'}
        </button>

        <form action="" onSubmit={handleSubmit} className="form" autoComplete="off">
          <StyledInput type="email" hidden name="email" />
          <StyledInput type="password" hidden name="password" />

          <div className="form__input-wrapper">
            <InputErrorMessages type="firstName" errorObj={errors} />
            <StyledInput
              type="text"
              name="firstName"
              value={state.firstName}
              // ref={firstNameRef}
              onChange={handleInputChange}
              placeholder="Your firstName"
              autoComplete="new-firstName"
            />
          </div>
          <div className="form__input-wrapper">
            <InputErrorMessages type="lastName" errorObj={errors} />
            <StyledInput
              type="text"
              name="lastName"
              value={state.lastName}
              // ref={lastNameRef}
              onChange={handleInputChange}
              placeholder="Your lastName"
              autoComplete="new-lastName"
            />
          </div>
          <div className="form__input-wrapper">
            <InputErrorMessages type="phone" errorObj={errors} />
            <StyledInput
              type="phone"
              name="phone"
              value={state.phone}
              // ref={phoneRef}
              onChange={handleInputChange}
              placeholder="Your phone"
              autoComplete="new-phone"
            />
          </div>
          <div className="form__input-wrapper">
            <InputErrorMessages type="email" errorObj={errors} />
            <StyledInput
              type="email"
              name="email"
              value={state.email}
              ref={emailRef}
              onChange={handleInputChange}
              placeholder="Your email"
              autoComplete="new-email"
            />
          </div>
          <div className="form__input-wrapper">
            <InputErrorMessages type="password" errorObj={errors} />
            <StyledInput
              type="password"
              name="password"
              value={state.password}
              onChange={handleInputChange}
              placeholder="Your password"
              autoComplete="new-password"
            />
          </div>
          <div className="form__input-wrapper justify-center d-flex">
            <StyledButton
              className="main"
              type="submit"
              size="lg"
            >
              Sign Up
            </StyledButton>
          </div>
        </form>
      </div>
    </StyledSignIn>
  )
}
