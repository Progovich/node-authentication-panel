/* eslint-disable */
import '@babel/polyfill';
import { login } from './login';

const username = document.querySelector('#username');
const password = document.querySelector('#password');

if (username && password) {
  document.querySelector('.auth').addEventListener('submit', (e) => {
    e.preventDefault();
    login(username.value, password.value);
  });
}
