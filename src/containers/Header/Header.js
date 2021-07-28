import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { clearUserAction, updateLanguageAction } from '../../store/actions/userActions';

function Header(props) {
  const store = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLanguage = (lang) => {
    dispatch(updateLanguageAction(lang));
  }

  const handleSignOut = () => {
    localStorage.clear();
    dispatch(clearUserAction());
  };

  console.log(store.user.lang)

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
              <li className="nav-item">
                <NavLink className="nav-link" to="/books/new"><AiOutlinePlus /> Book</NavLink>
              </li>
            </ul>
            <ul className="navbar-nav align-center">
              <div className="nav-item">
                <select name="lang" onChange={(e) => handleLanguage(e.target.value)} value={store.user?.lang}>
                  <option value="uz">Uzbekcha</option>
                  <option value="ru">Ruscha</option>
                  <option value="en">Englizcha</option>
                </select>
              </div>
              {
                props.hide ?
                  null
                  :
                  <>
                    {
                      (store.token && store.user?._id) ?
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
                  </>
              }

            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}


export default Header;