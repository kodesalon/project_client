import { useEffect, useState } from 'react';
import { SignUpContext } from 'contexts/SignUpContext';
import { useDebounce } from 'hooks/useDebounce';

const SignUpContextProvider = ({ children }) => {
  const [key, setKey] = useState('');
  const [signUpInput, setSignUpInput] = useState({
    alias: '',
    pwd: '',
    pwdCheck: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setKey(name);
    setSignUpInput((prev) => ({ ...prev, [name]: value }));
  };

  const signUpContextValue = { signUpInput, handleOnChange };
  const debouncedInput = useDebounce(key, 500);
  useEffect(() => {}, [debouncedInput]);
  return (
    <SignUpContext.Provider value={signUpContextValue}>
      {children}
    </SignUpContext.Provider>
  );
};

export default SignUpContextProvider;
