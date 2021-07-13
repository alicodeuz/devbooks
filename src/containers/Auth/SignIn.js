import React, { useCallback, useEffect, useState, useMemo, useRef } from 'react';
import { useHistory, Link, Prompt } from 'react-router-dom';
import { StyledButton, StyledInput } from '../../style/UI';
import StyledSignIn from '../../style/auth';
import columnImage from '../../assets/images/auth/login.svg';

export default function SignIn(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const emailRef = useRef();
  const [visible, setVisible] = useState(null);

  const handleInputChange = useCallback(e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...state, [name]: value }));

  }, [state]);

  return (
    <StyledSignIn>
      <div className="col-left">
        <img src={columnImage} alt="login page" />
      </div>
      <div className="col-right">
        <h2>Sign In</h2>
        <p>Do not you have an account? <Link to="/sign-up">Sign up</Link> </p>
        <button onClick={() => setVisible(state => !state)}>
          {visible ? 'Turn off' : 'Turn on'}
        </button>

        <form action="" className="form" autoComplete="off">
          <StyledInput type="email" hidden name="email" />
          <StyledInput type="password" hidden name="password" />

          <div className="form__input-wrapper">
            <StyledInput
              type="text"
              name="email"
              value={state.email}
              ref={emailRef}
              onChange={handleInputChange}
              placeholder="Your email"
              autoComplete="new-email"
            />
          </div>
          <div className="form__input-wrapper">
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
              Log in
            </StyledButton>
          </div>
        </form>
      </div>
    </StyledSignIn>
  )
}
