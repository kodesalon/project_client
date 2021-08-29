import client from 'apis/client';
import axios from 'axios';
export const postMemberLogin = ({ alias, password }) => {
  console.log(alias, password);
  return client
    .post('/api/v1/auth/login', {
      alias,
      password,
    })
    .then((res) => {
      console.log(res);

      return res.data;
    })
    .catch((error) => {
      if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        console.log(error.response.data); // {code: "M001"}
        console.log(error.response.status); // 400
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

export const postMemberSignUp = ({ alias, password, name, email, phone, createdDateTime }) => {
  console.log(createdDateTime);
  return axios
    .post('http://localhost:8080/api/v1/members/join', {
      alias,
      password,
      name,
      email,
      phone,
      createdDateTime,
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
    .get(`/api/v1/members`)
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

// 회원 탈퇴? 요청에 아무것도 필요 없나??
export const deleteMember = () => {
  return client
    .delete('api/v1/members')
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
