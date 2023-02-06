import React, { useEffect, useState } from "react"
import { getUserLoginAPI } from "../api/auth-api"
import { context_user, user_type } from "./context-type"

const AuthContext = React.createContext(context_user)

export function retriveStoredToken() {
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
  const [user, setUser] = useState(user_type)

  const userIsLoggedIn = !!token

  let contextValue = {
    currentUser: {
      id: user.id,
      name: user.name,
      email: user.email,
      imageUrl: user.imageUrl,
      address: user.address,
      gander: user.gander,
      status: user.status,
      role: user.role,
    },
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  }
  // GET USER LOGIN DATA
  useEffect(() => {
    if (token === null) {
      setUser(user_type)
    } else {
      getUserLoginAPI(token)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err))
    }
    return () => {}
  }, [token])

  function logoutHandler() {
    localStorage.removeItem("token")
    setToken(null)
  }

  function loginHandler(token) {
    localStorage.setItem("token", token)
    setToken(token)
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
