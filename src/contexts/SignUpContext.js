import { createContext } from 'react';

const signUpInput = {
  alias: '',
  pwd: '',
  pwdCheck: '',
  name: '',
  email: '',
  phone: '',
  handleOnChange: () => {},
};

export const SignUpContext = createContext({ signUpInput });
