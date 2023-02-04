export const userType = {
  id: "",
  name: "",
  email: "",
  imageUrl: "",
  address: "",
  gander: "",
  status: "",
  role: "",
}
export const CONTEXT_USER = {
  currentUser: userType,
  isLoggedIn: false,
  token: "",
  login: (token) => {},
  logout: () => {},
}
