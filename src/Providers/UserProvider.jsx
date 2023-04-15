import React from 'react';

export const UserContext = React.createContext({});

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = React.useState(null);

  return (
    <UserContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ userInfo, setUserInfo }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
