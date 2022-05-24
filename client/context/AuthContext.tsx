import React, { useState } from 'react';
import { loginWithLN } from '../api';

interface LNData {
  encoded: string;
  secret: string;
  url: string;
}

interface Props {
  children: React.ReactNode;
}

interface IAuthContext {
  handleLoginWithLN: () => void;
  lnData: LNData;
}

const defaultState = {
  handleLoginWithLN: () => {},
  lnData: {encoded: "", secret: "", url: ""}
};

export const AuthContext = React.createContext<IAuthContext>(defaultState);

export const AuthContextProvider = ({ children }: Props) => {
  const [lnData, setLnData] = useState(defaultState.lnData);

  const handleLoginWithLN = async () => {
    let response = await loginWithLN();
    setLnData(response.data)
  }

  const contextValue = {
    lnData,
    handleLoginWithLN,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};