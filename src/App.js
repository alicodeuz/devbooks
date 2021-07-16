import React, { useEffect, useState } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import SignUp from './containers/Auth/SignUp';
import SignIn from './containers/Auth/SignIn';
import Home from './containers/Home';
import BookDetails from './containers/Books/BookDetails';
import NotFoundPage from './components/NotFoundPage';
import AuthContext from './context/AuthContext';

const initialState = {
  token: null,
  user: {},
};

const defaultUser = {
  email: 'example@mail.ru',
  firstName: 'John',
  lastName: 'Doe',
}

function App() {
  const [authDetails, setAuthDetails] = useState(initialState);
  const token = authDetails.token;

  const handleSignOut = () => {
    localStorage.clear();
    setAuthDetails(initialState);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.user || "{}");
    const token = localStorage.token;
    if (token) {
      setAuthDetails(state => ({
        ...state,
        token,
        user: user || defaultUser
      }));
    }
  }, []);

  if (!token) {
    return (
      <AuthContext.Provider value={{ setAuthDetails }}>
        <Redirect exact to="/sign-in" />
        <Switch>
          <Route component={SignIn} exact path="/sign-in" />
          <Route component={SignUp} exact path="/sign-up" />
          <Route component={SignIn} />
        </Switch>
      </AuthContext.Provider>
    )
  };

  return (
    <AuthContext.Provider value={{}}>
      <div className="App">
        <header>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/sign-up">Sign Up</NavLink>
          <NavLink to="/sign-in">Sign in</NavLink>
          <button onClick={handleSignOut}>Sign Out</button>
        </header>
        <Redirect from={["/sign-in", '/sign-up']} to="/" />
        <Switch>
          <Route component={Home} exact path={["/", '/books', '/products']} />
          <Route component={BookDetails} exact path="/books/:id" />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
