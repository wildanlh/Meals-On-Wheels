import axios from "axios"
import { BASE_URL } from "./constant"

// GET ORDER
export const getMemberOrderAPI = async (token) => {
  return await axios.get(`${BASE_URL}/member/order`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// ORDER COMPLETE
export const postMemberOrderCompleteAPI = async (token, id) => {
  return await axios.get(`${BASE_URL}/member/order/${id}/complete`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// ORDER CREATE
export const postMemberOrderCreateAPI = async (token, id) => {
  return await axios.get(`${BASE_URL}/member/order/${id}/create`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// GET ORDER ALL
export const getMemberOrderAllAPI = async (token) => {
  return await axios.get(`${BASE_URL}/member/order/all`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}
