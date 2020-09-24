/* eslint-disable */
import axios from 'axios';
import { allert } from './allert';

export const login = async (username, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:5000/',
      data: {
        username,
        password,
      },
    });

    if (res.data.status === 'success') {
      allert('Success!', { type: 'success', align: 'top-left' });
      window.setTimeout(() => {
        location.reload();
      }, 1500);
    }
  } catch (err) {
    allert(err.response.data.message, { type: 'danger', align: 'top-left' });
  }
};
