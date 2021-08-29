import { createContext, useState } from 'react';

export const UserInfoContext = createContext();

const UserInfoContextProvider = ({ children }) => {
  const [memberId, setMemberId] = useState('');

  return (
    <UserInfoContext.Provider value={{ memberId, setMemberId }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoContextProvider;
