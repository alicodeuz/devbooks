import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import GlobalContext, { initialState } from '../../context/GlobalContext';

export default function Header(props) {
  const context = useContext(GlobalContext);

  const handleLanguage = (lang) => {
    context.setLang(lang);
    context.setAuthDetails(state => ({
      ...state,
      user: { ...state.user, lang }
    }));
  }

  const handleSignOut = () => {
    localStorage.clear();
    context.setAuthDetails(initialState)
  };


  return (
    <header>
      <nav className="navbar container justify-content-center navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Dev Books</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/authors">Authors</NavLink>
              </li>
            </ul>
            <ul className="navbar-nav align-center">
              <div className="nav-item">
                <select name="lang" onChange={(e) => handleLanguage(e.target.value)} value={context.lang}>
                  <option value="uz">Uzbekcha</option>
                  <option value="ru">Ruscha</option>
                  <option value="en">Englizcha</option>
                </select>
              </div>
              {
                (context.token && context.user._id) ?
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/profile">My account</NavLink>
                    </li>
                    <li className="nav-item">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={handleSignOut}
                      >Sign Out</button>
                    </li>
                  </>
                  :
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/sign-in">Sign In</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/sign-up">Sign Up</NavLink>
                    </li>
                  </>
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
