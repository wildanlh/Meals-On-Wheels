import axios from "axios"
import { BASE_URL } from "./constant"

// FEEDBACK
export const postfeedbackAPI = async (id) => {
  return await axios.post(`${BASE_URL}/feedback`, {
    id,
  })
}

// MENU
export const getMenu = async (token) => {
  return await axios.get(`${BASE_URL}/menu`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}
