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
// MENU
export const getMenuById = async (token, id) => {
  return await axios.get(`${BASE_URL}/menu/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// ADD MENU
export const addMenu = async (token, formData) => {
  return await axios.post(`${BASE_URL}/menu/add`, formData, {
    headers: { 
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data" },
     })
  }

