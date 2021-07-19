import React, { useState } from 'react'
import Books from '../Books';
import GlobalContext from '../../context/GlobalContext';

export default function Home() {
  const [lang, setLang] = useState('uz');

  const handleLanguage = (lang) => {
    setLang(lang)
  }

  return (
    <GlobalContext.Provider value={{
      handleLanguage: handleLanguage,
      lang,
      me: {
        name: 'Admin',
        role: 'admin'
      }
    }}>
      <div>
        <h2>Home Page</h2>
        <select name="lang" onChange={(e) => handleLanguage(e.target.value)} value={lang}>
          <option value="uz">Uzbekcha</option>
          <option value="ru">Ruscha</option>
          <option value="en">Englizcha</option>
        </select>
        <Books />
      </div>
    </GlobalContext.Provider>
  )
}
