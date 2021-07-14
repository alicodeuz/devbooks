import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'

export default function AuthorDetails() {
  // const { lang = 'uz', handleLanguage } = useContext(GlobalContext);
  // const { lang = 'uz', handleLanguage } = useContext(ThemeContext);
  return (
    <GlobalContext.Consumer>
      {value => (
        <div>
          <h2>AuthorDetails {value.lang}</h2>
          <button onClick={() => value.handleLanguage('en')}>Make English default language</button>
        </div>
      )}
    </GlobalContext.Consumer>
  )
}

