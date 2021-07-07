import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import classes from './SignIn.module.css';

export default function SignIn(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [visible, setVisible] = useState(null);
  const [users, setUsers] = useState([]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    console.log('I am effect');
    if (visible) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => {
          console.error(err);
        })
    }
  }, [visible, state.email]);

  useEffect(() => {
    console.log('I am effect');
    const focusMethod = () => {
      console.log("Focused");
    }
    window.addEventListener('focus', focusMethod);
    return () => window.removeEventListener('focus', focusMethod);
  }, [visible, state.email]);

  return (
    <div>
      <h2 className={classes.active}>Hello</h2>
      <div className="col-left">

      </div>
      <div className="col-right">
        <h2>Sign In</h2>
        <p>Do not you have an account? <Link to="/sign-up">Sign up</Link> </p>
        <button onClick={() => setVisible(state => !state)}>
          {visible ? 'Turn off' : 'Turn on'}
        </button>

        <form action="" className="form" autoComplete="off">
          <input type="email" hidden name="email" />
          <input type="password" hidden name="password" />

          <div className="form__input-wrapper">
            <input
              type="text"
              name="email"
              value={state.email}
              onChange={handleInputChange}
              placeholder="Your email"
              autoComplete="new-email"
            />
          </div>
          <div className="form__input-wrapper">
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleInputChange}
              placeholder="Your password"
              autoComplete="new-password"
            />
          </div>
          <div className="form__input-wrapper">
            <button type="submit">Log in</button>
          </div>
        </form>
      </div>
    </div>
  )
}
