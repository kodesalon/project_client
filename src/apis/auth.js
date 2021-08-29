import axios from 'axios';

export const postNewToken = ({ refreshToken }) => {
  return axios
    .post('http://localhost:8080/api/v1/auth/refreshtoken', {
      refreshToken: refreshToken,
    })
    .then((res) => {
      if (res.code) {
        return res.code;
      } else {
        // localStorage.setItem('aToken', res.data.accessToken);
        localStorage.setItem('rToken', res.data.refreshToken);
        return 'success';
      }
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        return error.response.data;
      } else if (error.request) {
        console.log(error.request);
        return 'Server Error';
      } else {
        console.log('Error', error.message);
      }
    });
};
