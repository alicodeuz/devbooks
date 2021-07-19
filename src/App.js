import React, { useEffect, useState } from 'react';
import { Route, Switch, NavLink, Redirect, useLocation } from 'react-router-dom';
import SignUp from './containers/Auth/SignUp';
import SignIn from './containers/Auth/SignIn';
import Home from './containers/Home';
import NotFoundPage from './components/NotFoundPage';
import AuthContext from './context/AuthContext';
import Authors from './containers/Authors';
import BookView from './containers/Books/BookView';

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
  const location = useLocation();

  const handleSignOut = () => {
    localStorage.clear();
    setAuthDetails(initialState);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.user || "{}");
    const token = localStorage.getItem('token');
    if (token) {
      setAuthDetails(state => ({
        ...state,
        token,
        user: user || defaultUser
      }));
    }
  }, []);

  const canRedirectToHome = location.pathname === '/sign-in' || location.pathname === '/sign-up';

  if (token) {
    return (
      <AuthContext.Provider value={{}}>
        <div className="App">
          <header>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/authors">Authors</NavLink>

            <button onClick={handleSignOut}>Sign Out</button>
          </header>
          {
            canRedirectToHome ? <Redirect from={["/sign-in", '/sign-up']} to="/" /> : null
          }
          <div className="container">
            <Switch>
              <Route component={Home} exact path={["/", '/books']} />
              <Route component={BookView} exact path={'/books/:id'} />
              <Route component={Authors} exact path="/authors" />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </AuthContext.Provider>
    );
  }

  return (
    <AuthContext.Provider value={{ setAuthDetails }}>
      {/* <Redirect exact to="/sign-in" /> */}
      <Switch>
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={SignIn} />
      </Switch>
    </AuthContext.Provider>
  )
}

export default App;
