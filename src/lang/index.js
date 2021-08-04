import ru from './ru.json';
import uz from './uz.json';
import en from './en.json';
import store from '../store';

const dictionary = {
  uz,
  ru,
  en
};

function getCurrentlang() {
  return store.getState().user.user.lang || 'en';
}

function t(str) {
  const lang = store.getState().user.user.lang || 'en';
  const translation = dictionary[lang][str];
  return translation || '**' + str;
};

export { t as default, getCurrentlang };