"use client"
import React, { createContext, useContext, useState } from 'react';

export type TAuthContext = {
    token: any;
    setToken: any;
}

const AuthContext = createContext<TAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }:any) => {
  const [token, setToken] = useState(null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};