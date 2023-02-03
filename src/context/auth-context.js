import React, { useEffect, useState } from "react"
import { getUserLoginAPI } from "../api/auth-api"
import { CONTEXT_USER, userType } from "./context-type"

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
  const [user, setUser] = useState(userType)

  const userIsLoggedIn = !!token

  // GET USER LOGIN DATA
  useEffect(() => {
    getUserLoginAPI(token)
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.log(err)
        setUser(userType)
      })
  }, [token])

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
  function logoutHandler() {
    setToken(null)
    localStorage.removeItem("token")
    contextValue.currentUser = {
      id: "",
      name: "",
      email: "",
      imageUrl: "",
      address: "",
      gander: "",
      status: "",
      role: "",
      token: "",
    }
  }

  function loginHandler(token) {
    setToken(token)
    localStorage.setItem("token", token)
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
