import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import SignUp from './containers/Auth/SignUp';
import SignIn from './containers/Auth/SignIn';
import Home from './containers/Home';
import BookDetails from './containers/Books/BookDetails';

function App() {
  return (
    <div className="App">
      <header>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
        <NavLink to="/sign-in">Sign in</NavLink>
      </header>
      <Switch>
        <Route component={Home} exact path={["/", '/books', '/products']} />
        <Route component={BookDetails} exact path="/books/:id" />
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
