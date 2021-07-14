import { createContext } from 'react';

const initialState = { lang: 'uz' };
const GlobalContext = createContext(initialState);

export default GlobalContext;