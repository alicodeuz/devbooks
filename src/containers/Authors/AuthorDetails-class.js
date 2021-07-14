import React from 'react'
import GlobalContext from '../../context/GlobalContext'

export default class AuthorDetails extends React.Component {
  static contextType = GlobalContext;
  render() {
    const { lang = 'uz', handleLanguage } = this.context;
    return (
      <div>
        <h2>AuthorDetails {lang}</h2>
        <button onClick={() => handleLanguage('en')}>Make English default language</button>
      </div>
    )
  }
}

// AuthorDetails.contextType = GlobalContext;
