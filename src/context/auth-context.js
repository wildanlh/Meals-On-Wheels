import React, { useEffect, useState } from "react"
import { getUserLoginAPI } from "../api/auth-api"
import { CONTEXT_USER } from "./context-type"

const AuthContext = React.createContext(CONTEXT_USER)

const retriveStoredToken = () => {
  const storedToken = localStorage.getItem("token")

  return {
    token: storedToken,
  }
}

export function AuthContextProvider(props) {
  const storedToken = retriveStoredToken()
  let initialToken

  if (storedToken) {
    initialToken = storedToken.token
  }

  const [token, setToken] = useState(initialToken)
  const [user, setUser] = useState(CONTEXT_USER)

  const userIsLoggedIn = !!token

  // GET USER LOGIN DATA
  useEffect(() => {
    if (token) {
      getUserLoginAPI(token)
        .then((res) => setUser(res.data))
        .catch((err) => {
          console.log(err)
          logoutHandler()
        })
    }
  }, [token])

  const logoutHandler = () => {
    setToken(null)
    localStorage.removeItem("token")
  }

  const loginHandler = (token) => {
    setToken(token)
    localStorage.setItem("token", token)
  }

  const contextValue = {
    id: user.id,
    name: user.name,
    email: user.name,
    imageUrl: user.imageUrl,
    address: user.address,
    gender: user.gender,
    roles: user.roles,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
