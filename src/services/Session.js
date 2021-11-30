import React, { createContext, useMemo, useState } from 'react'

const SessionContext = createContext({
  state: {
    isAuthenticated: false,
    user: {token: "", name: "", lastname: "", email: "", address: "", cvu: "", walletAddress: "", points: 0, numberOfOperations: 0, reputation: 0, transactions: []}
  },
  actions: {
    setUser: (user) => {}
  }
})

const SessionProvider = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const [user, setUser] = useState(storedUser);
  const isAuthenticated = useMemo(() => !!user?.token, [user]);

  const state = {
    user,
    isAuthenticated
  }

  const actions = {
    setUser
  }

  return(
    <SessionContext.Provider value={ { state, actions } }>
      { children }
    </SessionContext.Provider>
  );
}

export {SessionContext, SessionProvider}