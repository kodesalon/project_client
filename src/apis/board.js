import client from 'apis/client';

export const postSaveBoard = ({ title, content, createdDateTime }) => {
  return client
    .post('/api/v1/boards', {
      title,
      content,
      createdDateTime,
    })
    .then((res) => {
      console.log(res);
      if (res.code) {
        return res.code;
      }
      return res;
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

export const getBoards = ({ lastBoardId, size }) => {
  return client
    .get(`/api/v1/boards`, {
      params: {
        lastBoardId,
        size,
      },
    })
    .then((res) => {
      console.log(res);
      if (res.code) {
        return res.code;
      }
      return res;
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
