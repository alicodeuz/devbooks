import React, { createRef } from 'react';
import classes from './SignUp.module.css';

export default class SignUp extends React.Component {
  state = { email: '', name: '' }
  emailRef = createRef(null);

  render() {
    console.log(this.emailRef, this.inputRef);
    console.log(this.state);
    return (
      <div>
        <h2 className={classes.active}>Sign Up</h2>
        <input
          type="email"
          name="email"
          onChange={(e) => this.setState({ email: e.target.value })}
          ref={this.emailRef}
        />
        <input
          type="text"
          name="name"
          ref={el => this.inputRef = el}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
      </div>
    )
  }
}
