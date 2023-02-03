export const userType = {
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
export const CONTEXT_USER = {
  currentUser: userType,
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
}
