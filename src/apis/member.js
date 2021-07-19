import client from 'apis/client';

export const postMemberLogin = ({ alias, password }) => {
  console.log(alias, password);
  return client
    .post('/api/v1/members/login', {
      alias,
      password,
    })
    .then((res) => {
      if (res.message) {
        return res.message;
      } else {
        localStorage.setItem('id', res.data.memberId);
        return 'success';
      }
    })
    .catch((error) => {
      if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        console.log(error.response.data); // {timestamp: "2021-07-05T15:57:37.600+00:00", status: 400, error: "Bad Request", message: "", path: "/api/v1/members/login"}
        console.log(error.response.status);
        return error.response.data;
      } else if (error.request) {
        // 요청이 이루어 졌으나 응답을 받지 못했습니다.
        // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
        // Node.js의 http.ClientRequest 인스턴스입니다.
        console.log(error.request);
        return 'Server Error';
      } else {
        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
        console.log('Error', error.message);
      }
    });
};

export const postMemberSignUp = ({ alias, password, name, email, phone }) => {
  return client
    .post('/api/v1/members', {
      alias,
      password,
      name,
      email,
      phone,
    })
    .then((res) => {
      console.log(res);
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

// 조회는 서버측에서 Path Variable 을 바꾼거 같음?
export const getMemberSelect = ({ memberId }) => {
  return client
    .get(`/api/v1/members/${memberId}`)
    .then((res) => {
      console.log(res);
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

export const putMemberPasswordUpdate = ({ password }) => {
  return client
    .put(`/api/v1/members/password`, {
      password,
    })
    .then((res) => {
      console.log(res);
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
