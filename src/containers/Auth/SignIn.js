import React, { useCallback, useEffect, useState, useMemo, useRef } from 'react';
import { useHistory, Link, Prompt } from 'react-router-dom';
import classes from './SignIn.module.css';
import Modal from './Modal';

const products = [
  { id: 1, name: 'Laptop', price: 300 },
  { id: 2, name: 'Laptop 2', price: 200 },
  { id: 3, name: 'Laptop', price: 100 },
  { id: 4, name: 'Laptop', price: 400 },
  { id: 5, name: 'Laptop', price: 4500 },
  { id: 6, name: 'Laptop', price: 1230 },
];

export default function SignIn(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const emailRef = useRef();
  const [visible, setVisible] = useState(null);
  const [users, setUsers] = useState([]);

  const handleInputChange = useCallback(e => {
    const { name, value } = e.target;

    if (value.length > 3) {
      console.log('Hey', emailRef.current, emailRef.current.style)
      emailRef.current.style.border = '2px solid green'
    } else {
      emailRef.current.style.border = '2px solid red'
    }
    setState(prevState => ({ ...state, [name]: value }));

  }, [state]);

  useEffect(() => {
    if (visible) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => {
          console.error(err);
        })
    }
  }, [visible]);

  const hideModal = useCallback(() => setVisible(!visible), [visible]);

  const total = useMemo(() => products.reduce((data, item) => {
    data.obj[item.id] = item;
    data.total += item.price;
    return data;
  }, { total: 0, obj: {} }), []);

  const productsAsIds = useMemo(() => products.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {}), []);

  console.log(total)

  // useEffect(() => {
  //   const focusMethod = () => {
  //     console.log("Focused");
  //   }
  //   window.addEventListener('focus', focusMethod);
  //   return () => window.removeEventListener('focus', focusMethod);
  // }, [visible, state.email]);

  console.log(emailRef.current);

  return (
    <div>
      <Prompt
        when={true}
        message="Bye bye"
      />
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
              ref={emailRef}
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
      <Modal
        visible={visible}
        hideModal={hideModal}
      />
    </div>
  )
}
