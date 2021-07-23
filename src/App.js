import React, { useEffect, useState } from 'react';
import { Route, Switch, NavLink, Redirect, useLocation } from 'react-router-dom';
import SignUp from './containers/Auth/SignUp';
import SignIn from './containers/Auth/SignIn';
import Home from './containers/Home';
import NotFoundPage from './components/NotFoundPage';
import GlobalContext from './context/GlobalContext';
import Authors from './containers/Authors';
import BookView from './containers/Books/BookView';
import ErrorBoundry from './components/ErrorBoundry';
import Loader from './components/Loader';
import Header from './containers/Header';
import withAuthDetails from './HOC/withAuthDetails';
import ErrorMessages from './components/ErrorMessages';

const HeaderWithHOC = withAuthDetails(Header, false);

const initialState = {
  token: null,
  user: {
    lang: 'uz'
  },
};

const defaultUser = {
  email: 'example@mail.ru',
  firstName: 'John',
  lastName: 'Doe',
}

function App() {
  const [authDetails, setAuthDetails] = useState(initialState);
  const token = authDetails.token;
  const [lang, setLang] = useState('uz');

  const handleLanguage = (lang) => {
    setLang(lang)
  };

  const location = useLocation();

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

  const contextValue = {
    token: authDetails.token,
    user: authDetails.user,
    setLang,
    setAuthDetails,
  }

  if (token) {
    return (
      <ErrorBoundry hideMessage={false}>
        <GlobalContext.Provider value={contextValue}>
          <ErrorMessages message={'Hello JS'} />
          <div className="App">
            <HeaderWithHOC />
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
            <Loader />
          </div>
        </GlobalContext.Provider>
      </ErrorBoundry>
    );
  }

  return (
    <GlobalContext.Provider value={{ setAuthDetails }}>
      {/* <Redirect exact to="/sign-in" /> */}
      <Switch>
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={SignIn} />
      </Switch>
    </GlobalContext.Provider>
  )
}

export default App;
