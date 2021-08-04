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
import { useDispatch } from 'react-redux';
import { updateUserAction } from './store/actions/userActions';
import { useSelector } from 'react-redux';
import AddBook from './containers/Books/AddBook';
import MyBooks from './containers/Books/MyBooks';
import AddAuthor from './containers/Authors/AddAuthor';
import { fetchMyBooksAction } from './store/actions/bookActions';

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
  const dispatch = useDispatch();
  const { token, user } = useSelector(state => state.user);
  console.log(token, user)

  useEffect(() => {
    dispatch(fetchMyBooksAction())
  }, [token, user]);

  const location = useLocation();
  const canRedirectToHome = location.pathname === '/sign-in' || location.pathname === '/sign-up';


  if (token) {
    return (
      <ErrorBoundry hideMessage={false}>
        <div className="App">
          <HeaderWithHOC />
          {
            canRedirectToHome ? <Redirect from={["/sign-in", '/sign-up']} to="/" /> : null
          }
          <div className="container">
            <Switch>
              <Route component={Home} exact path={["/", '/books']} />
              <Route component={AddBook} exact path={'/books/new'} />
              <Route component={MyBooks} exact path={'/books/my-books'} />
              <Route component={BookView} exact path={'/books/:id'} />
              <Route component={Authors} exact path="/authors" />
              <Route component={AddAuthor} exact path="/authors/new" />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
          <Loader />
        </div>
      </ErrorBoundry>
    );
  }

  return (
    <React.Fragment>
      {/* <Redirect exact to="/sign-in" /> */}
      < Switch >
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={SignIn} />
      </ Switch >
    </React.Fragment>
  )
}

export default App;
