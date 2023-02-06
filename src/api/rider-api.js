import axios from "axios"
import { BASE_URL } from "./constant"

// GET ORDER
export const getRiderOrderAPI = async (token) => {
  return await axios.get(`${BASE_URL}/rider/order`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// ORDER COMPLETE
export const postRiderOrderCompleteAPI = async (token, id) => {
  return await axios.get(`${BASE_URL}/rider/order/${id}/complete`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// ORDER CREATE
export const postRiderOrderCreateAPI = async (token, id) => {
  return await axios.get(`${BASE_URL}/rider/order/${id}/deliver`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// GET ORDER ALL
export const getRiderOrderAllAPI = async (token, id) => {
  return await axios.get(`${BASE_URL}/rider/order/all`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// SET STATUS
export const setStatusAPI = async (token, statusCode) => {
  return await axios.get(`${BASE_URL}/rider/status/${statusCode}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}
