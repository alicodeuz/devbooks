import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'

export default function AuthorDetails() {
  const { lang = 'uz', handleLanguage } = useContext(GlobalContext);
  return (
    <div>
      <h2>AuthorDetails {lang}</h2>
      <button onClick={() => handleLanguage('en')}>Make English default language</button>
    </div>
  )
}

